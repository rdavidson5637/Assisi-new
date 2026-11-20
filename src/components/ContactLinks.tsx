import { site } from '@/data/site';

const tapLink = 'inline-flex min-h-11 items-center';

function joinClass(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function EmailLink({ className }: { className?: string }) {
  return (
    <a href={site.emailHref} className={joinClass(tapLink, className)}>
      {site.email}
    </a>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a href={site.phoneHref} className={joinClass(tapLink, className)}>
      {site.phoneDisplay}
    </a>
  );
}

export function AddressLines({ className }: { className?: string }) {
  return (
    <p className={className}>
      {site.addressLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}
