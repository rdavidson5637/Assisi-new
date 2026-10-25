import { site } from '@/data/site';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={className}>
      {site.social.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
