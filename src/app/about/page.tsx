import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Assisi Animal Sanctuary</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Founded in 1997, Assisi Animal Sanctuary is a local independent animal welfare charity in Northern Ireland.
          </p>

          <p>
            We are committed to providing shelter, care, food, veterinary treatment, safety, companionship 
            and ultimately finding new loving homes for all the animals that come into our Sanctuary.
          </p>

          <p>
            <strong>Our No-Kill policy means every animal is given the time, care and opportunity to find 
            the loving home they deserve.</strong>
          </p>

          <p>
            Animal Welfare is paramount to everything we do.
          </p>

          <p>
            For every animal rescued, we ensure they are neutered, vaccinated, wormed, defleaed (and all 
            dogs and cats are micro-chipped). Regardless of their circumstance, age or state of health, 
            we provide all animals with an excellent quality of life, something many of them have never 
            experienced before.
          </p>

          <p>
            Our aim is to find each and every animal that comes in to our care, the loving forever home 
            that is right for them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Vision</h2>
          <p>
            A future where Assisi Animal Sanctuary is Northern Ireland's leading Animal Welfare Charity 
            bringing about the day when every companion animal has a happy home for life.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
          <p>
            To keep as many animals in their homes as possible by providing support and advice to owners; 
            to rescue and rehome needy animals by providing modern facilities with well trained staff and 
            volunteers; to provide animal welfare education and leadership to all touchpoints within 
            Northern Ireland.
          </p>

          <p>
            Animal Welfare is at the core of everything we do at Assisi. We strive to reduce and ultimately 
            stop the current destruction of companion animals in Northern Ireland.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Animal Rights</h2>
          <p>Assisi believes that every animal has a right to:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>A suitable, comfortable and happy environment</li>
            <li>A suitable and appropriate diet, exercise and socialisation regime</li>
            <li>Be able to exhibit normal behaviour patterns</li>
            <li>The need to be housed with or apart from other animals</li>
            <li>Be protected from pain, suffering and disease</li>
          </ol>

          <p>
            We believe that, for most animals, these freedoms are best delivered in suitable, loving homes. 
            Some of the animals we care for have, or develop, chronic medical conditions. Where we can, we 
            aim to place our animals in private foster homes, provide emotional support for the foster family 
            and practical veterinary care for the animal, in order that we sustain and optimise the quality 
            of life for all.
          </p>

          <p>
            If we cannot get a home for a particular animal, we will continue to provide sanctuary for their 
            lifetime and continue to deliver the best quality care to the best of our ability for as long as 
            they are with us.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Make a Donation</h2>
          <p className="text-gray-600 mb-6">
            Your donation helps provide everything from nutritious meals and veterinary treatment to warmth, 
            safety and rehabilitation. Every contribution, whatever the amount, helps us continue our 
            lifesaving work. Thank you for being part of their journey to a brighter future.
          </p>
          <Link href="/donate" className="btn-primary">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
