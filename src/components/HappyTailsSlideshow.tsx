'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { successStories } from '@/data/successStories';

const AUTO_ADVANCE_MS = 5000;

export default function HappyTailsSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % successStories.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number) => setIndex((i + successStories.length) % successStories.length);

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/3] sm:aspect-[16/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {successStories.map((story, i) => (
        <div
          key={story.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={story.image}
            alt={`${story.name}, happily rehomed`}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">{story.name}</h3>
            <p className="text-sm sm:text-base text-gray-100 max-w-2xl mb-1">{story.story}</p>
            <p className="text-xs sm:text-sm text-gray-300">— {story.adopter}</p>
          </div>
        </div>
      ))}

      {/* Prev / Next controls */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous story"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next story"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {successStories.map((story, i) => (
          <button
            key={story.id}
            onClick={() => goTo(i)}
            aria-label={`Show ${story.name}'s story`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
