export interface SuccessStory {
  id: string;
  name: string;
  image: string;
  story: string;
  adopter: string;
}

export const successStories: SuccessStory[] = [
  {
    id: 'francesca',
    name: 'Francesca',
    image: '/images/stories/francesca.jpg',
    story:
      'Francesca, a 15-year-old Turkish Van, found sanctuary life difficult. In November 2025 Elizabeth fostered her into a quiet home. She settled within a couple of days, and that foster home is now hers for good.',
    adopter: 'Elizabeth Rea, foster carer',
  },
];
