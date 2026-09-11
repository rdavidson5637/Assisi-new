export interface SuccessStory {
  id: string;
  name: string;
  image: string;
  story: string;
  adopter: string;
}

export const successStories: SuccessStory[] = [
  {
    id: 'buddy',
    name: 'Buddy',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop',
    story: 'Buddy spent 6 months waiting for a home before the Doyle family fell in love with him. Now he\'s never far from a walk or a warm spot on the sofa.',
    adopter: 'The Doyle Family, Bangor',
  },
  {
    id: 'whiskey',
    name: 'Whiskey',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200&h=800&fit=crop',
    story: 'A shy senior cat who took weeks to come out of her shell. Whiskey now rules the house and sleeps on the good pillow every night.',
    adopter: 'Claire M., Newtownards',
  },
  {
    id: 'rex',
    name: 'Rex',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&h=800&fit=crop',
    story: 'Rex came to us nervous around people. Months of patient care later, he found a quiet home where he\'s finally learning to trust again.',
    adopter: 'The Hutchinson Family, Holywood',
  },
  {
    id: 'poppy',
    name: 'Poppy',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&h=800&fit=crop',
    story: 'One of our longest-stay cats, Poppy waited over a year for the right match. Her new family says she was worth every day of the wait.',
    adopter: 'Sarah & James, Belfast',
  },
  {
    id: 'duke',
    name: 'Duke',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200&h=800&fit=crop',
    story: 'Duke needed an experienced owner who understood his breed. Two years on, he\'s a therapy-dog-in-training and the star of his neighbourhood.',
    adopter: 'Mark T., Conlig',
  },
  {
    id: 'biscuit',
    name: 'Biscuit',
    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=1200&h=800&fit=crop',
    story: 'Found as a stray, Biscuit was nursed back to health by our team before finding a family who spoils her rotten.',
    adopter: 'The Kelly Family, Bangor',
  },
];
