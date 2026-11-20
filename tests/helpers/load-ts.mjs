import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import React from 'react';
import ts from 'typescript';

const repoRoot = path.resolve(import.meta.dirname, '..', '..');
const srcRoot = path.join(repoRoot, 'src');
const nodeRequire = createRequire(import.meta.url);
const moduleCache = new Map();

function resolveLocalFile(specifier, fromDir) {
  let candidate;
  if (specifier.startsWith('@/')) {
    candidate = path.join(srcRoot, specifier.slice(2));
  } else if (specifier.startsWith('.')) {
    candidate = path.resolve(fromDir, specifier);
  } else if (path.isAbsolute(specifier)) {
    candidate = specifier;
  } else {
    return null;
  }

  const attempts = [
    candidate,
    `${candidate}.ts`,
    `${candidate}.tsx`,
    `${candidate}.js`,
    path.join(candidate, 'index.ts'),
    path.join(candidate, 'index.tsx'),
  ];

  for (const filePath of attempts) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }
  throw new Error(`Could not resolve local module "${specifier}" from ${fromDir}`);
}

const nextLinkStub = {
  __esModule: true,
  default: function MockNextLink({ href, children, ...props }) {
    const resolvedHref = typeof href === 'string' ? href : String(href?.pathname ?? '');
    return React.createElement('a', { href: resolvedHref, ...props }, children);
  },
};

const nextImageStub = {
  __esModule: true,
  default: function MockNextImage({ src, alt, ...props }) {
    const cleanProps = { ...props };
    delete cleanProps.fill;
    delete cleanProps.priority;
    delete cleanProps.sizes;
    return React.createElement('img', { src: String(src), alt: alt ?? '', ...cleanProps });
  },
};

/**
 * Loads a TypeScript/TSX module from `src/` using the repo's installed `typescript`
 * compiler with `@/` path resolution and lightweight `next/link` + `next/image` stubs.
 */
export function loadTsModule(specifier, fromDir = srcRoot) {
  const filePath = resolveLocalFile(specifier, fromDir);
  if (!filePath) {
    throw new Error(`Expected local module specifier, got: ${specifier}`);
  }
  if (moduleCache.has(filePath)) {
    return moduleCache.get(filePath).exports;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    fileName: filePath,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });

  const mod = { exports: {} };
  moduleCache.set(filePath, mod);

  const dir = path.dirname(filePath);
  const localRequire = (req) => {
    if (req === 'next/link') return nextLinkStub;
    if (req === 'next/image') return nextImageStub;
    if (req === 'next/navigation') {
      return {
        usePathname: () => '/',
        useRouter: () => ({ replace: () => {}, push: () => {} }),
        useSearchParams: () => new URLSearchParams(),
        notFound: () => {
          throw new Error('NEXT_NOT_FOUND');
        },
      };
    }
    if (req.startsWith('@/') || req.startsWith('.')) {
      return loadTsModule(req, dir);
    }
    return nodeRequire(req);
  };

  const fn = vm.runInThisContext(
    `(function (exports, require, module, __filename, __dirname) {\n${outputText}\n})`,
    { filename: filePath }
  );
  fn(mod.exports, localRequire, mod, filePath, dir);
  return mod.exports;
}

export { repoRoot, srcRoot };
