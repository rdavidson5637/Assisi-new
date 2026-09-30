import { site } from '@/data/site';

export function EmailLink({ className }: { className?: string }) {
  return (
    <a href={site.emailHref} className={className}>
      {site.email}
    </a>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a href={site.phoneHref} className={className}>
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
