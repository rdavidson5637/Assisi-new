export type Species = 'dog' | 'cat' | 'rabbit' | 'guinea-pig' | 'other';
export type AgeCategory = 'baby' | 'young' | 'adult' | 'senior';
export type Compatibility = boolean | 'older-only' | 'unknown';

export interface Animal {
  id: string;
  name: string;
  species: Species;
  breed: string;
  age: string;
  ageCategory: AgeCategory;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large' | 'unknown';
  image: string;
  description: string;
  personality: string[];
  goodWith: {
    children: Compatibility;
    dogs: Compatibility;
    cats: Compatibility;
  };
  specialNeeds: boolean;
  specialNeedsDetails?: string;
  rehomingFee: number;
  /** Days waiting, when the sanctuary has published a figure. Null means it is not stated. */
  daysAtSanctuary: number | null;
  reserved: boolean;
}

export const LONG_STAY_DAYS = 90;

export function isLongStay(animal: Pick<Animal, 'daysAtSanctuary' | 'reserved'>) {
  return (
    !animal.reserved &&
    animal.daysAtSanctuary != null &&
    animal.daysAtSanctuary >= LONG_STAY_DAYS
  );
}

export const animals: Animal[] = [
  {
    "id": "rocky",
    "name": "Rocky",
    "species": "dog",
    "breed": "Labrador Retriever",
    "age": "6 Years",
    "ageCategory": "adult",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/rocky.jpg",
    "description": "*Still under assessment*\n\nMeet Rocky! Rocky is a handsome 6 year old black lab cross who is looking for his new home! Staff noticed that his legs looked a bit longer than they should for a lab, and after speaking to a vet it is believed he has some Lurcher crossed in with him.\n\nRocky is a wonderful dog with a gentle soul and plenty of love to give.\n\nAt six years old, he has left the chaos of puppyhood behind but still enjoys getting out and about for walks, exploring new places, and spending quality time with his people.\n\nWith his Labrador nature, Rocky is loyal, affectionate, and enjoys being part of family life.\n\nHis suspected Lurcher heritage gives him an athletic side, and he loves stretching his legs and enjoying the outdoors.\n\nAfter a good walk, however, he is more than happy to settle down and relax beside you for a fuss and a cuddle.\n\nRocky is looking for a home where he can continue to thrive and be treated as a valued member of the family.\n\nHe would suit an owner who can provide him with regular exercise, companionship, and plenty of affection.\n\nWhether it’s countryside adventures, beach walks, or simply curling up at home together, Rocky is happiest when he is with his people.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "marshall",
    "name": "Marshall",
    "species": "dog",
    "breed": "Cockapoo",
    "age": "1 Year 4 Months",
    "ageCategory": "young",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/marshall.jpg",
    "description": "*Still under assessment*\n\nMarshall is is a young, affectionate boy with lots of love to give.\n\nLike many Cockapoos, he is intelligent, playful, and enjoys being around people.\n\nHe has a friendly nature and loves attention, cuddles, and spending time with his family.\n\nAt just one year old, Marshall still has plenty of puppy energy and enjoys walks, playtime, and opportunities to learn new things.\n\nHe would thrive in a home where he can receive the\n\ntime, patience, and companionship he deserves.\n\nHe is still being assessed and more information will be added with time, but so far Marshall is passing them with flying colours with how friendly he is!\n\nHe could be rehomed with children, as long as they are okay with a energetic, bouncy dog! He is also showing positive reactions to dogs, so could live with another dog.",
    "personality": [],
    "goodWith": {
      "children": true,
      "dogs": true,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "storm",
    "name": "Storm",
    "species": "dog",
    "breed": "Staffordshire Bull Terrier",
    "age": "6 Years 8 Months",
    "ageCategory": "adult",
    "gender": "female",
    "size": "medium",
    "image": "/images/animals/storm.jpg",
    "description": "This beautiful girl is Storm!\n\nOur Stormy is a gorgeous brindle Staffie with lots of love to give to her new family.\n\nStorm has unfortunately been diagnosed with Epilepsy but this doesn’t hold her back and is being controlled by medication and she is doing really well.\n\nShe loves getting out and about with her people but doesn’t enjoy the company of other dogs.\n\nStorm has had a bit of a troubled past which has led to some behavioural issues which we are working on and will continue to need worked on in her new home.\n\nStorm would love for her new family to be willing to continue on with a behaviourist when she goes home as this will be very beneficial to her and her settling in and she really loves and enjoys learning!\n\nStorm would benefit from a quiet home in a rural area where there is little traffic, people and other dogs.\n\nShe is a very sweet girl who needs someone to understand her and her needs but also willing to give her that time and space to settle into a brand new home.\n\nStorms ideal home is an adult only home and no other pets!\n\nIf you think you could give this lovely girl a home that can meet her needs please fill in an application form.",
    "personality": [],
    "goodWith": {
      "children": false,
      "dogs": false,
      "cats": false
    },
    "specialNeeds": true,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "Diagnosed with epilepsy, controlled with medication. Needs an adult-only home and no other pets."
  },
  {
    "id": "wee-max",
    "name": "Wee Max",
    "species": "dog",
    "breed": "Collie (Border)",
    "age": "8 Years 10 Months",
    "ageCategory": "senior",
    "gender": "male",
    "size": "medium",
    "image": "/images/animals/wee-max.jpg",
    "description": "Max is a handsome Collie who is ready to start searching for his forever home.\n\nWhen Max first arrived at the sanctuary he was originally a stray and therefore was very wary of us all.\n\nHe initially would be scared to approach staff and volunteers but through a lot of time and patience he has build confidence and come on leaps and bounds.\n\nHe was even scared of having a collar and lead put on.\n\nThrough time the staff worked with Max daily to help him build some positive associations to having a lead on and were able to then start taking him out for walks.\n\nHe eventually grew even more confident allowing us to harness on him and happy to be walked by volunteers too.\n\nMax is a nervous boy and would love to find a patient owner who can help him as he learns to trust humans again.\n\nMax loves having a sniff about on his walks and has been known to seek out the sunniest spot in our field to lay down and sunbathe.\n\nMax would love the chance to start over again with a new owner, he deserves a quiet happy home where he can relax and enjoy living life to the fullest.\n\nMax is seeking an experienced quiet home with someone who has patience and time to further encourage him to come out of his shell.\n\nHe needs a home with no other pets and no children (living or visiting).\n\nMax would also need to live in a quiet or rural area as he is wary of fast moving vehicles.\n\nIf you think you can provide Max with his forever home please submit an application form and a member of the dog team will be in touch!.",
    "personality": [],
    "goodWith": {
      "children": false,
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "pablo",
    "name": "Pablo",
    "species": "dog",
    "breed": "Pug",
    "age": "9 Years 5 Months",
    "ageCategory": "senior",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/pablo.jpg",
    "description": "This is our wee Pablo!\n\nPablo is a pug cross.\n\nPablo is the best wee boy not only is he very handsome but he is also full of character! Pablo loves to get out on adventures and have lots of fun sometimes to the beach or the forest where he can sniff out what everyone has been up to.\n\nHe is a very smart boy, who loves learning new things and doing some trick training here at the sanctuary, he has even learnt to crawl along on his stomach.\n\nHe loves getting attention from the staff here when he asks for it as once he knows you he will happily jump up to say hello and then continue with his mischief.\n\nPablo is desperate to find a loving forever home as he has been here at the sanctuary a very long time and although he has his family here in our dog unit staff, nothing compares to home of your own.\n\nPablo is looking for an adult only home to allow him to be himself\n\nand grow strong bonds with his new family so that together they can go on fun adventures.\n\nHe needs to be the only pet in the home and honestly you wouldn’t need any other pets if you had Pablo! Pablo although being a great wee companion for a human he strongly dislikes other canines so wouldn’t be keen on making any canine pals.\n\nHe is the whole package, the real deal, just the best boy you could ask for.\n\n (Did you read the bit where we said he can crawl? How many dogs do you know who can do that? Not many I bet)\n\nPablo does have some behavioural issues which would benefit from a home that will be willing to work with him on these and just give him the space he needs.\n\nIf you think you could offer this wee cheeky chap a forever home to call his own please fill in an application form.",
    "personality": [],
    "goodWith": {
      "children": false,
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "big-max",
    "name": "Big Max",
    "species": "dog",
    "breed": "German Shepherd",
    "age": "9 Years 2 Months",
    "ageCategory": "senior",
    "gender": "male",
    "size": "large",
    "image": "/images/animals/big-max.jpg",
    "description": "This is Max, a beautiful shepherd cross with a heart as big as his paws.\n\nHe found himself back at Assisi through no fault of his own.\n\nLoved by staff both old and new, this gentle giant has charmed everyone who takes the time to earn his trust.\n\nWhile Max is quick to warm up to familiar faces, he can be wary of strangers – particularly men- but with patience and positive interactions he comes around.\n\nOnce you’re in his circle, you’ll be greeted with bonding enthusiasm, a wagging tail, and a tongue-out grim as he races through the field like a pup, ball in mouth.\n\nOn walks, Max is strong on the lead but loves a good sniff around.\n\nIn his younger years, he was more reactive to dogs and strangers when out on walks, now he can cope with both at a distance and is able to glance and return to his favourite hobby – sniffing.\n\nDue to his size, strength and history, Max would need an adult-only home as well as being the only pet.\n\nHe’s ready to find a home that will give him the love, stability and time he deserves.\n\nIf you think you can offer this perfect boy forever home, please fill in the form below.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "bruce",
    "name": "Bruce",
    "species": "dog",
    "breed": "Jack Russell cross",
    "age": "8 Years 11 Months",
    "ageCategory": "senior",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/bruce.jpg",
    "description": "This handsome boy is Bruce, and he is your stereotypical Jack Russel.\n\nBruce can be wary of the big wide world and finds it overwhelming at times.\n\nHe much prefers quiet walks with his trusted companions and values quality time with them – once Bruce has built a bond with you, you will have a friend for life!\n\nHis best friend at the Sanctuary is Tana the Shih Tzu, and they love going for quiet afternoon strolls together where they can take in the scenery and all the interesting smells.\n\nBruce is comfortable wearing his muzzle when out on walks and can easily take treats through the gaps when working on learning new skills with the staff.\n\nIn his downtime, he loves playing with toys and has become quite the collector! – he will often inspect our donation bin for more to add to his collection.\n\nHe also enjoys daily naps in his comfortable bed and, like many of us, prefers to be undisturbed while sleeping.\n\nIt would be beneficial to provide Bruce with a quiet area in his new home to place his bed.\n\nHe is incredibly clever and loves learning new tricks! – he knows sit, paw, down, and hand touch – he has also trained people to let them know he would like attention by gently tapping you with his paw.\n\nBruce is looking for a home that can work with some behavioural issues he has developed throughout his life due to stress and not giving him the space and time he needs.\n\nHe can be quite fearful of strangers and men and will need time to come out of his shell, build confidence and trust in his new home.\n\nDo you have room in your heart and your home for a shy guy like Bruce? If so, please get in touch with us if you would like more information or fill in the application form down below.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "chase",
    "name": "Chase",
    "species": "dog",
    "breed": "Jack Russell cross",
    "age": "11 Years 6 Months",
    "ageCategory": "senior",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/chase.jpg",
    "description": "This gorgeous boy is our wee Chase!\n\nChase is a 11 year old jack russell terrier x.\n\nChase’s favourite thing is to play and destroy a squeaky toy, you can often hear squeaking coming from his kennel so we know hes having lots of fun! he is currently working on breaking the record for how many toys he can sneak into his kennel, so far he has managed 16! We tried to ask him how he did it but he was not willing to reveal his secrets.\n\nA kind volunteer who takes Chase on walks brought him a lovely toy box so now he can fit even more in!\n\nHe enjoys dinning alone and sleeping alone, in fact that’s one great thing about him, he likes having his own space and is quite happy doing his own thing.\n\nHe would really appreciate an owner who wouldn’t mind throwing his ball for him every now and again though.\n\nChase loves learning and is currently working on learning a trick called “Hand Touch”.\n\nChase is an active guy who loves long walks on the beach or quiet forest walks in the rain.\n\nHis favourite thing to do is splash in muddy puddles.\n\nChase is looking for a home with adults only, he is wary of children and finds it hard to cope in their presence.\n\nHe would really love to be the only pet in the house, its just been so long since he has had an owner he doesn’t like the thought of having to share one.\n\nChase deserves a home where he can be treated like royalty!.",
    "personality": [],
    "goodWith": {
      "children": false,
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "c-cooper",
    "name": "C Cooper",
    "species": "dog",
    "breed": "Cockapoo",
    "age": "2 Years 10 Months",
    "ageCategory": "young",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/c-cooper.jpg",
    "description": "Cooper – our curly-haired boy! ??\n\nUnfortunately, our lovely Cooper has found himself back at the sanctuary.\n\nCooper is a wonderful young Cockapoo with so much love to give.\n\nAs a young boy, he has lots and lots of energy and needs an active home that can provide plenty of time, stimulation, and enrichment.\n\nHe’s incredibly intelligent and loves getting out and about, exploring the world and taking everything in with excitement and curiosity.\n\nThat said, new environments and unfamiliar sounds can sometimes feel a little overwhelming for him.\n\nCooper is still finding his way in the world.\n\nWhile he enjoys a good fuss and lots of attention, he can be reactive towards other dogs when out and about.\n\nBecause of this, Cooper would really benefit from ongoing training to help him focus his energy, build confidence, and develop great manners.\n\nHe’s a clever boy who would love learning new skills and showing off some cool tricks!\n\nDue to previous home incidents, Cooper is looking for an adult-only, active home.\n\nHe would thrive with adopters who are committed to continuing his training.\n\nHe would also benefit hugely from having a hobby, such as scent work, which would give him a positive outlet for his intelligence and energy.\n\nIf you feel you could offer Cooper a loving home where he can continue to grow, learn, and become the best companion he can be, please fill in an application form.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 170,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "smoky-bacon",
    "name": "Smoky Bacon",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "2 Months",
    "ageCategory": "baby",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/smoky-bacon.jpg",
    "description": "Meet out litter of Tayto kittens! These kittens are about 9 weeks, and ready to go to their new home!\n\nWe have:\n\nReady Salted- Female, Tabby.\n\nSmoky Bacon- Male, Tabby.\n\nRoast Chicken- Male, Tabby.\n\nPrawn Cocktail- Female, Black (with some white)\n\nPickled Onion- Male, Black (with some white)\n\nAll kittens are full of beans and will make a great addition to any home! They have been growing up on foster where they have been exposed to a home environment.\n\n**IMPORTANT: Their mum, Tayto, was diagnosed with FIV.\n\nWe won’t know until the kittens are 6 months old if they are also FIV+.\n\nOnce they get that age, Assisi will get them F tested to check.\n\nAs there is a possibility they may be FIV+, we will be rehoming them as if they are.\n\nFIV means they will be immunocompromised, and may be higher risk of getting unwell throughout their life.\n\nBecause of this, they will need to be kept as strict housecats.\n\nThey need to be rehomed as the only cat in the home, with another one of their littermates, or to a house with a cat that has been diagnosed with FIV.\n\nThey can live with dogs.**.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "May be FIV positive — their mum, Tayto, is FIV+, and the kittens cannot be confirmed until 6 months. Rehome with a littermate, as the only cat, or with an FIV-positive cat."
  },
  {
    "id": "roast-chicken",
    "name": "Roast Chicken",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "2 Months",
    "ageCategory": "baby",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/roast-chicken.jpg",
    "description": "Meet out litter of Tayto kittens! These kittens are about 9 weeks, and ready to go to their new home!\n\nWe have:\n\nReady Salted- Female, Tabby.\n\nSmoky Bacon- Male, Tabby.\n\nRoast Chicken- Male, Tabby.\n\nPrawn Cocktail- Female, Black (with some white)\n\nPickled Onion- Male, Black (with some white)\n\nAll kittens are full of beans and will make a great addition to any home! They have been growing up on foster where they have been exposed to a home environment.\n\n**IMPORTANT: Their mum, Tayto, was diagnosed with FIV.\n\nWe won’t know until the kittens are 6 months old if they are also FIV+.\n\nOnce they get that age, Assisi will get them F tested to check.\n\nAs there is a possibility they may be FIV+, we will be rehoming them as if they are.\n\nFIV means they will be immunocompromised, and may be higher risk of getting unwell throughout their life.\n\nBecause of this, they will need to be kept as strict housecats.\n\nThey need to be rehomed as the only cat in the home, with another one of their littermates, or to a house with a cat that has been diagnosed with FIV.\n\nThey can live with dogs.**.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "May be FIV positive — their mum, Tayto, is FIV+, and the kittens cannot be confirmed until 6 months. Rehome with a littermate, as the only cat, or with an FIV-positive cat."
  },
  {
    "id": "prawn-cocktail",
    "name": "Prawn Cocktail",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "2 Months",
    "ageCategory": "baby",
    "gender": "female",
    "size": "unknown",
    "image": "/images/animals/prawn-cocktail.jpg",
    "description": "Meet out litter of Tayto kittens! These kittens are about 9 weeks, and ready to go to their new home!\n\nWe have:\n\nReady Salted- Female, Tabby.\n\nSmoky Bacon- Male, Tabby.\n\nRoast Chicken- Male, Tabby.\n\nPrawn Cocktail- Female, Black (with some white)\n\nPickled Onion- Male, Black (with some white)\n\nAll kittens are full of beans and will make a great addition to any home! They have been growing up on foster where they have been exposed to a home environment.\n\n**IMPORTANT: Their mum, Tayto, was diagnosed with FIV.\n\nWe won’t know until the kittens are 6 months old if they are also FIV+.\n\nOnce they get that age, Assisi will get them F tested to check.\n\nAs there is a possibility they may be FIV+, we will be rehoming them as if they are.\n\nFIV means they will be immunocompromised, and may be higher risk of getting unwell throughout their life.\n\nBecause of this, they will need to be kept as strict housecats.\n\nThey need to be rehomed as the only cat in the home, with another one of their littermates, or to a house with a cat that has been diagnosed with FIV.\n\nThey can live with dogs.**.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "May be FIV positive — their mum, Tayto, is FIV+, and the kittens cannot be confirmed until 6 months. Rehome with a littermate, as the only cat, or with an FIV-positive cat."
  },
  {
    "id": "pickled-onion",
    "name": "Pickled Onion",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "2 Months",
    "ageCategory": "baby",
    "gender": "male",
    "size": "unknown",
    "image": "/images/animals/pickled-onion.jpg",
    "description": "Meet out litter of Tayto kittens! These kittens are about 9 weeks, and ready to go to their new home!\n\nWe have:\n\nReady Salted- Female, Tabby.\n\nSmoky Bacon- Male, Tabby.\n\nRoast Chicken- Male, Tabby.\n\nPrawn Cocktail- Female, Black (with some white)\n\nPickled Onion- Male, Black (with some white)\n\nAll kittens are full of beans and will make a great addition to any home! They have been growing up on foster where they have been exposed to a home environment.\n\n**IMPORTANT: Their mum, Tayto, was diagnosed with FIV.\n\nWe won’t know until the kittens are 6 months old if they are also FIV+.\n\nOnce they get that age, Assisi will get them F tested to check.\n\nAs there is a possibility they may be FIV+, we will be rehoming them as if they are.\n\nFIV means they will be immunocompromised, and may be higher risk of getting unwell throughout their life.\n\nBecause of this, they will need to be kept as strict housecats.\n\nThey need to be rehomed as the only cat in the home, with another one of their littermates, or to a house with a cat that has been diagnosed with FIV.\n\nThey can live with dogs.**.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "May be FIV positive — their mum, Tayto, is FIV+, and the kittens cannot be confirmed until 6 months. Rehome with a littermate, as the only cat, or with an FIV-positive cat."
  },
  {
    "id": "tayto",
    "name": "Tayto",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "1 Year 2 Months",
    "ageCategory": "young",
    "gender": "female",
    "size": "unknown",
    "image": "/images/animals/tayto.jpg",
    "description": "Meet Tayto! Tayto was a stray who chose someone’s house to have her babies in (whom have all been named after Tayto flavours).\n\nTayto has been out on foster with her kittens while they grow up.\n\nShe has enjoyed being in the home, with lots of space and some doggy friends.\n\nWhile out on foster, Tayto had some health issues.\n\nShe is on the mend, but after blood tests were done it was found that Tayto is FIV+.\n\nFIV isn’t a death sentence- it just means she is immunocompromised.\n\nIt also means that she will need to be kept as a strict housecat with no outdoor access.\n\nThis is something she will be more than happy with, as she loves to sprawl out on the sofa, or watch the world go past outside the window.\n\nTayto would be best suited to a home with older children, and could live with a cat-savvy dog.\n\nShe is a very friendly girl, but she can be a slow burner when it comes to bonding with her person.\n\nShe took a while to come around to the fosterer- but this could also be because she is having to put must of her energy into raising her chaotic little kittens! Once she is settled in and doesn’t have to think of her kittens anymore, she should show her true personality!\n\nIf you think you could offer Tayto a home, please get in touch.",
    "personality": [],
    "goodWith": {
      "children": "older-only",
      "dogs": true,
      "cats": "unknown"
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "FIV positive. Best suited to a home with older children, and could live with a cat-savvy dog."
  },
  {
    "id": "sakura",
    "name": "Sakura",
    "species": "cat",
    "breed": "Oriental",
    "age": "4 Years 6 Months",
    "ageCategory": "adult",
    "gender": "female",
    "size": "unknown",
    "image": "/images/animals/sakura.jpg",
    "description": "Sakura is a beautiful Oriental cat that is seeking out a very special home.\n\nSakura came from a breeder and unfortunately missed out on much of the early socialisation that helps kittens grow into confident cats.\n\nAs a result, she can be shy and uncertain around people and new situations.\n\nShe is not the sort of cat who will immediately seek attention from strangers or demand affection as soon as she arrives in a new home.\n\nInstead, Sakura prefers to observe from a safe distance while she works out whether she can trust the people around her.\n\nShe needs someone who understands that building a relationship with her will take time and that every small step forward is a significant achievement.\n\nShe has been out on foster and is showing significant progress with people once she gets to know them.\n\nOnce she begins to feel secure, her personality starts to emerge, and the sweet, sensitive cat underneath becomes more apparent.\n\nShe needs a home that will allow her to continue that journey without pressure, where she can learn at her own pace that people can be trusted and that affection can be a wonderful thing.\n\nBecause Sakura lacks confidence, she would be happiest as the only pet in the home.\n\nShe enjoys the company of other cats, but doesn’t know how to properly behave with them, and ends up scaring them.\n\nWe are therefore looking for a home where she can be the only cat and enjoy a calm, predictable environment tailored to her needs.\n\nSakura would also be best suited to an adult-only home.\n\nYoung children, busy households and lots of visitors are likely to be overwhelming for her.\n\nWhat she truly needs is a quiet home with patient people who are prepared to let her settle in her own time and accept that trust cannot be rushed.\n\nExperience with Oriental cats would be highly desirable.\n\nAnyone familiar with the breed will understand how intelligent, sensitive and deeply emotional they can be.\n\nOrientals often form incredibly strong bonds with their chosen humans, and while Sakura may take longer than most to reach that point, the reward for her future owner could be a truly special relationship built on trust and understanding.\n\nSakura is looking for an indoor-only home where she will be safe, secure and given every opportunity to thrive.\n\nShe deserves a family who can see beyond her initial shyness and recognise the potential of the wonderful companion she can become.\n\nSakura is for someone who finds joy in watching a nervous animal gradually blossom, who understands that patience is an investment, and who is willing to celebrate the small victories along the way.\n\nIn return, you will be giving a deserving cat the second chance she needs and the opportunity to finally experience the security and love of a true forever home.\n\nIf you believe you could offer Sakura the calm, committed and understanding home she is searching for, we would love to hear from you.\n\nShe may not give her heart away immediately, but for the right person, she will be worth every moment of patience.",
    "personality": [],
    "goodWith": {
      "children": "older-only",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "nora",
    "name": "Nora",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "2 Years 2 Months",
    "ageCategory": "young",
    "gender": "female",
    "size": "small",
    "image": "/images/animals/nora.jpg",
    "description": "Nora was found living as a stray and sought shelter inside a car engine before being rescued.\n\nDespite her difficult start and life on the streets, she has shown incredible resilience and has blossomed into a loving companion.\n\nNora is a sweet, gentle cat who enjoys affection and the comfort of a safe home.\n\nShe is super friendly and confident, and is happy wherever she is (even at the vets) as long as she is getting pets.\n\nNora is FIV positive (Feline Immunodeficiency Virus).\n\nThis means she will need a caring owner who understands her condition, but it’s important to know that many FIV-positive cats live long, happy, healthy lives.\n\nBecause of this, she will need to be kept as a housecat.\n\nShe would need to be the only pet in the home, but can live with children as long as there are precautions put in place so that she doesn’t accidentally get outside.\n\nHaving survived life as a stray and the dangers of living under car bonnets, Nora deserves a home where she will never have to fend for herself again.\n\nShe is looking for a family who will give her the love, patience, and security she has always deserved.",
    "personality": [],
    "goodWith": {
      "children": true,
      "dogs": false,
      "cats": false
    },
    "specialNeeds": true,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": false,
    "specialNeedsDetails": "FIV positive. Needs to be the only pet. Can live with children if she cannot get outside."
  },
  {
    "id": "mac-cheese",
    "name": "Mac & Cheese",
    "species": "cat",
    "breed": "Domestic shorthair",
    "age": "1 Year 2 Months",
    "ageCategory": "young",
    "gender": "male",
    "size": "medium",
    "image": "/images/animals/mac-cheese.jpg",
    "description": "If you’re looking for a duo that’s as comforting as your favourite bowl of mac and cheese, then look no further than these two handsome boys!\n\nMac (more white, left) and Cheese (more ginger, right) are a bonded pair who are ready to find their forever home together.\n\nLike the classic dish they’re named after, they’re best enjoyed as a package deal!\n\nCheese is the more confident one and will be first over to say hello.\n\nOnce he knows you, he starts purring at just the sight of you! He’s the first to investigate new things and is happy to show his brother that the world isn’t so scary.\n\nMac is a little more reserved and prefers to take his time.\n\nOnce he sees that Cheese has given something his paw of approval, he’s much more likely to join in.\n\nWhile they’re affectionate and sweet-natured cats, both boys can be a little shy when meeting new people and in unfamiliar situations.\n\nBecause of this, they’d be happiest in a calm adult only home or one with sensible teenagers, where they can settle in at their own pace and build their confidence.\n\nWith a little patience, plenty of treats, and lots of love, you’ll soon discover that these boys are ‘grate’ company.\n\nThey’re ready to bring extra warmth, companionship, and a generous helping of ginger charm to their new family.\n\nCould you be the missing ingredient in Mac and Cheese’s happily ever after?.",
    "personality": [],
    "goodWith": {
      "children": "older-only",
      "dogs": false,
      "cats": false
    },
    "specialNeeds": false,
    "rehomingFee": 100,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "boris",
    "name": "Boris",
    "species": "rabbit",
    "breed": "Lop Cross",
    "age": "7 Months",
    "ageCategory": "baby",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/boris.jpg",
    "description": "Hello Mr Man!!!!\n\nMeet Boris! Boris is a typical lop cross; aka full of energy and mischief! As of writing this, Boris has been in our care for less than 24 hours and already acts as if he owns the place! Boris seems to be a very confident little guy, with next to no fear in him.\n\nEven the strangest of sounds don’t startle him.\n\nBoris LOVES humans, but will love other bunnies just as much (actually probably more!).\n\nSince he is currently by himself, he will need to go home with another rabbit.\n\nIf you’ve got a rabbit at home that is yearning for the company of their own kind then please put in an online application down below!<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "peanut",
    "name": "Peanut & Butter",
    "species": "guinea-pig",
    "breed": "Sheltie",
    "age": "1 Year 3 Months",
    "ageCategory": "young",
    "gender": "male",
    "size": "medium",
    "image": "/images/animals/peanut.jpg",
    "description": "Look at that hair!!\n\nMeet Peanut and Butter! Getting photos of them was like getting a picture of lightening; they are too fast! Peanut is the older of the pair, and also Butter’s father.\n\nYou can tell who Peanut is by his lovely long hair! Butter is the smaller tri-coloured piggy.\n\nBoth these guys have only recently arrived into our care as of the time I’m writing this.\n\nBut they’re settling in very well! They get VERY noisy when it comes to vegetable time.\n\nThey basically squeak the entire unit down from their excitement!\n\nPeanut and Butter will have to come home together.\n\nIf you’d be interested in adopting this lovely pair, then please put in an online application form down below!<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 20,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "frazzle",
    "name": "Frazzle",
    "species": "rabbit",
    "breed": "Lop Cross",
    "age": "7 Months",
    "ageCategory": "baby",
    "gender": "female",
    "size": "small",
    "image": "/images/animals/frazzle.jpg",
    "description": "Look at that itty bitty face!!\n\nMeet Frazzle! Frazzle has only recently arrive into our care as of writing this, and she is getting more and more confident as the days go on.\n\nShe seems to be a very curious little rabbit, always wanting to stick her nose in everything and anything!\n\nShe is still getting used to head rubs, opting to give our hand a sniff appose to relaxing and enjoying head rubs! But overtime she will become a head rub loving monster!!\n\nSince Frazzle is on her own, she will need to be rehomed with another neutered rabbit.\n\nIf you’ve got a single rabbit at home looking for a friend, then please put in an online application down below!<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "zola-blue",
    "name": "Zola & Blue",
    "species": "rabbit",
    "breed": "Mini Lop",
    "age": "6 Years 8 Months",
    "ageCategory": "adult",
    "gender": "male",
    "size": "medium",
    "image": "/images/animals/zola-blue.jpg",
    "description": "ZOLA AND BLIUE!<3\n\nNormally they aren't as tufty looking, but currently they're going through a MASSIVE molt!! But this is Zola and Blue.\n\nZola is the brownish grey lop, and Blue is the white and fawn lop.\n\nThere is a notable size difference between the pair of them, Zola is a lot larger than Blue!\n\nBoth Zola and Blue are so sweet and affectionate; they've not got a bad bone in their body.\n\nI find that Blue is the most confident out of the pair of them, but Zola is still extremely confident too! Other than finding the odd tumble weed of fur rolling around due to their current molt, they're super clean! They take a lot of pride in always toileting in their hay tray.\n\nSince Zola and Blue are a bonded pair, they will have to go home together.\n\nThese two would make the perfect little house rabbits.\n\nIf you'd be interested in adopting them, then please put in an online application down below!<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "coco",
    "name": "Coco",
    "species": "rabbit",
    "breed": "Dutch",
    "age": "3 Years 1 Month",
    "ageCategory": "adult",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/coco.jpg",
    "description": "COCO!!!!\n\nMeet Coco! From his picture, he is almost blending in with his blanket! Coco arrived into our care alongside his brother Biscuit, but they were a bonded pair.\n\nWe were told that Coco was the shyer of the pair, but he is a pretty confident boy!\n\nCoco will have his nose in everything and anything he can get to.\n\nHe is a super curious boy! I’m sure in no time he’ll be running over to humans for attention!\n\nSince Coco is a single bunny, we’ll be looking to get him a friend.\n\nIf you’ve got a single rabbit at home, then please put in an online application down below<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "biscuit",
    "name": "Biscuit",
    "species": "rabbit",
    "breed": "Dutch",
    "age": "3 Years 1 Month",
    "ageCategory": "adult",
    "gender": "male",
    "size": "small",
    "image": "/images/animals/biscuit.jpg",
    "description": "Such pretty colours!!\n\nMeet Biscuit! The second Biscuit arrived into our care, I knew he was gonna be a rascal (in the best possible way).\n\nBiscuit will stick his nose in everything and anything he can get to; nothing is safe! Biscuit would be a very outgoing little rabbit.\n\nAs soon as he sees us going into his run, he is running over to us like a whippet!\n\nBiscuit is a little larger than he should be for his breed and size; he’s got a bit of a belly.\n\nBut he’ll be back in proper bunny shape in no time!\n\nIf you’ve got a rabbit at home little for a friend, then please put in an online application form down below<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": false
  },
  {
    "id": "rose-lily-clover-isla-skye",
    "name": "Rose, Lily, Clover, Isla & Skye",
    "species": "other",
    "breed": "Smooth",
    "age": "1 Year 1 Month",
    "ageCategory": "young",
    "gender": "female",
    "size": "small",
    "image": "/images/animals/rose-lily-clover-isla-skye.jpg",
    "description": "Meet our resident ratties!\n\nThese girls are Lily, Rose, Clover, Isla and Skye! As you can two of them stick out like a pair of sour thumbs; that’s Isla and Skye, who are sisters! At first they’re a bit trick to tell a part, but Skye is the larger naked rat and Isla is the smaller one.\n\nBoth these girls constantly full of beans, especially Skye! But both are equally as loving as one another.\n\nThen we have the ladies with fur, who are all also sisters.\n\nThere is Lilly the grey and white rat; she is the most confident out of them all.\n\nThen there is Rose the agouti rat who is a little more reserved, and lastly there is Clover the black rat who would be the quietist of out the five of them.\n\nPrior to arriving into our care, they were extremely well handled and it shows! As soon as we open one of the doors to their enclosure, their awake and wanting to know what they can get involved in.\n\nThese girls would make the perfect rats for both experienced and first time rat owners alike! If you’d be interested in this mischief, then please put in an online application down below<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 15,
    "daysAtSanctuary": null,
    "reserved": true
  },
  {
    "id": "misty-shadow",
    "name": "Misty & Shadow",
    "species": "rabbit",
    "breed": "Holland Lop",
    "age": "2 Years 2 Months",
    "ageCategory": "young",
    "gender": "male",
    "size": "medium",
    "image": "/images/animals/misty-shadow.jpg",
    "description": "So cute!!! Meet Misty and Shadow!\n\nThese two brothers have recently arrived into our care, and they’re up there with the cutest rabbits we’ve ever seen.\n\nBoth of them are teeny-tiny.\n\nMisty is the grey rabbit, and Shadow is the black rabbit!\n\nBoth boys were completely full of hormones when they first arrived into our care; but since their neuters, they’ve completely settled down.\n\nThe boys are like two peas in a pod; never leaving one another’s side! Where one goes, the other isn’t too far behind.\n\nIn terms of how they feel about humans: they’re super curious about us! I find that Shadow would be the more confident one when it comes to human interaction, but Misty is by no means shy.\n\nBoth of them are still getting used to head rubs currently.\n\nOftentimes you’ll be able to give them a few head rubs, but then they’ll turn their back on you! Over time, and with more human contact, they’ll start to get better and better with head rubs!\n\nSince these boys are a duo, they’ll need to go home together.\n\nIf you’d be interested in these boys, then put in an online rehoming form down below!<3.",
    "personality": [],
    "goodWith": {
      "children": "unknown",
      "dogs": "unknown",
      "cats": "unknown"
    },
    "specialNeeds": false,
    "rehomingFee": 45,
    "daysAtSanctuary": null,
    "reserved": true
  }
];
