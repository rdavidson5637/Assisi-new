import Link from 'next/link';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import {
  type ChristmasEvent,
  christmasLinks,
  resolveChristmasHref,
} from '@/data/christmas';
import { site } from '@/data/site';
import { plainDashes } from '@/lib/text';

interface ChristmasEventsListProps {
  events: readonly ChristmasEvent[];
}

export default function ChristmasEventsList({ events }: ChristmasEventsListProps) {
  const calendarLink = resolveChristmasHref(christmasLinks.eventsCalendarUrl, '/contact');
  const socialLinks = site.social.filter(
    (item) => item.label === 'Facebook' || item.label === 'Instagram'
  );

  if (events.length === 0) {
    return (
      <div className="panel p-6 md:p-8" data-testid="christmas-events-empty">
        <h3 className="text-lg font-bold text-ink mb-2">
          Christmas events will be announced soon
        </h3>
        <p className="text-ink/80 mb-4">
          We are still confirming dates, times and venues for this year&apos;s festive events and
          collections. We will add confirmed details here as soon as they are ready.
        </p>
        <p className="text-ink/70 text-sm mb-5">
          In the meantime, follow our updates on{' '}
          {socialLinks.map((social, index) => (
            <span key={social.label}>
              {index > 0 ? ' or ' : null}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {social.label}
              </a>
            </span>
          ))}
          , or get in touch at <EmailLink className="link" /> or <PhoneLink className="link" />.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {calendarLink.isExternal ? (
            <a
              href={calendarLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View festive events updates →
            </a>
          ) : (
            <Link href={calendarLink.href} className="btn-secondary">
              Contact us about upcoming events →
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <ul className="space-y-4" data-testid="christmas-events-list">
      {events.map((event) => {
        const bookingLink = resolveChristmasHref(event.bookingUrl, '/contact');
        return (
          <li key={event.id} className="panel p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-ink">{event.title}</h3>
              <p className="text-sm font-bold text-ink/80">
                {plainDashes(event.dateLabel)}
                {event.timeLabel ? `, ${plainDashes(event.timeLabel)}` : ''}
              </p>
            </div>
            <p className="text-sm text-ink/70 mb-3">
              <span className="font-bold text-ink">Venue:</span> {event.venue}
            </p>
            <p className="text-ink/80 mb-4">{event.summary}</p>
            {bookingLink.isExternal ? (
              <a
                href={bookingLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Event details →
              </a>
            ) : (
              <Link href={bookingLink.href} className="btn-secondary">
                Contact us for details →
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
