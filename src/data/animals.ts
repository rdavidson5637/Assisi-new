export interface Animal {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'guinea-pig' | 'other';
  breed: string;
  age: string;
  ageCategory: 'baby' | 'young' | 'adult' | 'senior';
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  image: string;
  description: string;
  personality: string[];
  goodWith: {
    children: boolean | 'older-only';
    dogs: boolean;
    cats: boolean;
  };
  specialNeeds: boolean;
  specialNeedsDetails?: string;
  rehomingFee: number;
  daysAtSanctuary: number;
  reserved: boolean;
}

export const animals: Animal[] = [
  {
    id: 'teddy',
    name: 'Teddy',
    species: 'dog',
    breed: 'Terrier Mix',
    age: '4 years',
    ageCategory: 'adult',
    gender: 'male',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop',
    description: 'Teddy came to us when his owner could no longer care for him. He loves cuddles and would suit a quieter home. Can be nervous around other dogs so would prefer to be the only pet.',
    personality: ['Calm', 'Affectionate'],
    goodWith: { children: 'older-only', dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 170,
    daysAtSanctuary: 45,
    reserved: true
  },
  {
    id: 'banjo',
    name: 'Banjo',
    species: 'dog',
    breed: 'Collie Cross',
    age: '2 years',
    ageCategory: 'young',
    gender: 'male',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=600&fit=crop',
    description: 'Banjo is an active young lad looking for an experienced owner who can continue his training. He needs plenty of exercise and mental stimulation. Could live with another dog.',
    personality: ['Energetic', 'Smart'],
    goodWith: { children: true, dogs: true, cats: false },
    specialNeeds: false,
    rehomingFee: 170,
    daysAtSanctuary: 30,
    reserved: false
  },
  {
    id: 'storm',
    name: 'Storm',
    species: 'dog',
    breed: 'Husky',
    age: '3 years',
    ageCategory: 'adult',
    gender: 'female',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=600&h=600&fit=crop',
    description: 'Storm needs an experienced husky owner who understands the breed. She requires a secure garden and lots of exercise. Not suitable for homes with cats or small animals.',
    personality: ['Independent', 'Active'],
    goodWith: { children: 'older-only', dogs: true, cats: false },
    specialNeeds: false,
    rehomingFee: 170,
    daysAtSanctuary: 60,
    reserved: false
  },
  {
    id: 'wee-max',
    name: 'Wee Max',
    species: 'dog',
    breed: 'Jack Russell',
    age: '8 years',
    ageCategory: 'senior',
    gender: 'male',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=600&fit=crop',
    description: 'Wee Max is looking for a quiet retirement home. He has arthritis and requires daily medication but still enjoys short walks. Good with other calm dogs and cats.',
    personality: ['Gentle', 'Relaxed'],
    goodWith: { children: 'older-only', dogs: true, cats: true },
    specialNeeds: true,
    specialNeedsDetails: 'Requires daily medication for arthritis',
    rehomingFee: 170,
    daysAtSanctuary: 120,
    reserved: false
  },
  {
    id: 'pablo',
    name: 'Pablo',
    species: 'dog',
    breed: 'Staffie Mix',
    age: '5 years',
    ageCategory: 'adult',
    gender: 'male',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop',
    description: 'Pablo is a friendly lad who loves people. He can be strong on the lead so needs an owner who can manage him. Would prefer to be the only pet in the home.',
    personality: ['Friendly', 'Strong'],
    goodWith: { children: true, dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 170,
    daysAtSanctuary: 25,
    reserved: false
  },
  {
    id: 'big-max',
    name: 'Big Max',
    species: 'dog',
    breed: 'German Shepherd',
    age: '6 years',
    ageCategory: 'adult',
    gender: 'male',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=600&fit=crop',
    description: 'Big Max came to us when his family emigrated. He is loyal and protective, needs an experienced owner. Not suitable for first-time dog owners.',
    personality: ['Loyal', 'Protective'],
    goodWith: { children: 'older-only', dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 170,
    daysAtSanctuary: 90,
    reserved: false
  },
  {
    id: 'tayto',
    name: 'Tayto',
    species: 'cat',
    breed: 'Ginger Tabby',
    age: '3 years',
    ageCategory: 'adult',
    gender: 'male',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop',
    description: 'Tayto is an independent boy who enjoys his own space but will come for cuddles on his own terms. Would suit a home with garden access. Could live with another cat.',
    personality: ['Independent', 'Relaxed'],
    goodWith: { children: true, dogs: false, cats: true },
    specialNeeds: false,
    rehomingFee: 100,
    daysAtSanctuary: 35,
    reserved: false
  },
  {
    id: 'moo',
    name: 'Moo',
    species: 'cat',
    breed: 'Black & White',
    age: '5 years',
    ageCategory: 'adult',
    gender: 'female',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=600&fit=crop',
    description: 'Moo is a chatty girl who loves company. She would suit someone who is home often. Good with children and other cats.',
    personality: ['Chatty', 'Friendly'],
    goodWith: { children: true, dogs: true, cats: true },
    specialNeeds: false,
    rehomingFee: 100,
    daysAtSanctuary: 20,
    reserved: false
  },
  {
    id: 'lola',
    name: 'Lola',
    species: 'cat',
    breed: 'Tortoiseshell',
    age: '7 years',
    ageCategory: 'adult',
    gender: 'female',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop',
    description: 'Lola prefers to be the only cat in the home. She can be shy at first but warms up with patience. Would suit a quiet household.',
    personality: ['Shy', 'Independent'],
    goodWith: { children: 'older-only', dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 100,
    daysAtSanctuary: 55,
    reserved: false
  },
  {
    id: 'nora',
    name: 'Nora',
    species: 'cat',
    breed: 'Tabby',
    age: '10 years',
    ageCategory: 'senior',
    gender: 'female',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=600&fit=crop',
    description: 'Nora is a gentle older lady looking for a quiet home where she can enjoy her retirement. She likes gentle strokes and a warm lap.',
    personality: ['Gentle', 'Quiet'],
    goodWith: { children: 'older-only', dogs: false, cats: true },
    specialNeeds: false,
    rehomingFee: 100,
    daysAtSanctuary: 80,
    reserved: false
  },
  {
    id: 'tofu',
    name: 'Tofu',
    species: 'rabbit',
    breed: 'Lop',
    age: '2 years',
    ageCategory: 'adult',
    gender: 'male',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=600&fit=crop',
    description: 'Tofu is a friendly lop who enjoys being handled. He needs a spacious hutch and run, and would benefit from daily interaction.',
    personality: ['Curious', 'Friendly'],
    goodWith: { children: true, dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 45,
    daysAtSanctuary: 40,
    reserved: false
  },
  {
    id: 'peanut-butter',
    name: 'Peanut & Butter',
    species: 'guinea-pig',
    breed: 'American Short Hair',
    age: '1 year',
    ageCategory: 'young',
    gender: 'male',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=600&fit=crop',
    description: 'Peanut and Butter are a bonded pair and must be rehomed together. They are friendly and enjoy vegetables at feeding time.',
    personality: ['Bonded pair', 'Friendly'],
    goodWith: { children: true, dogs: false, cats: false },
    specialNeeds: false,
    rehomingFee: 40,
    daysAtSanctuary: 15,
    reserved: false
  }
];
