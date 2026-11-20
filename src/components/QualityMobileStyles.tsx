/**
 * Scoped quality / mobile styles for free pages (not owned by draft #2 or open #12).
 * Injected as a <style> tag so site-integrity's TS loader never has to parse a .css file.
 * Palette: Assisi tokens only.
 */
const css = `
.qm-page { overflow-x: clip; }
.qm-page a.link,
.qm-page .qm-tap {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
}
.qm-page .btn-primary,
.qm-page .btn-secondary {
  min-height: 2.75rem;
}
@media (max-width: 390px) {
  .qm-page { overflow-wrap: anywhere; }
  .qm-page img,
  .qm-page video { max-width: 100%; }
}
`;

export default function QualityMobileStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
