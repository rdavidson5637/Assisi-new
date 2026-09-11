import Link from 'next/link';
import AnimalCard from '@/components/AnimalCard';
import HappyTailsSlideshow from '@/components/HappyTailsSlideshow';
import { animals } from '@/data/animals';

export default function Home() {
  const featuredAnimals = animals.filter(a => !a.reserved).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-yellow-400 text-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Welcome to Assisi Animal Sanctuary
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Founded in 1997, Assisi Animal Sanctuary is a local, independent animal welfare charity 
              in Northern Ireland, offering a place of safety, healing, and hope for vulnerable animals 
              and inviting our community to stand with us in giving every animal the second chance they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/adopt" className="btn-primary text-center">
                Adopt a Pet
              </Link>
              <Link href="/donate" className="btn-outline text-center">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Tails */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Happy Tails</h2>
            <p className="text-gray-600 text-lg">
              Every one of these animals waited for the right home to come along. Here&apos;s what
              happened after they found it.
            </p>
          </div>
          <HappyTailsSlideshow />
        </div>
      </section>

      {/* Cat Intake Appeal */}
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Assisi Animal Sanctuary launches appeal to create dedicated Cat Intake Unit
              </h2>
              <p className="text-gray-300">
                Help us provide better care for incoming cats with a dedicated assessment and treatment space.
              </p>
            </div>
            <Link 
              href="/donate" 
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Adopt a Pet */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Adopt a Pet
            </h2>
            <p className="text-gray-600 text-lg">
              Every rescue has a story, and every adoption creates a happy ending. Meet our dogs, cats, 
              rabbits and guinea pigs waiting for a loving forever home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/adopt" className="btn-outline">
              View All Animals
            </Link>
          </div>
        </div>
      </section>

      {/* Ways to Help Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Donate */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">
                Every donation is a lifeline. We are always grateful for all donations received – 
                please consider supporting us today.
              </p>
              <Link href="/donate" className="text-gray-900 font-semibold hover:underline">
                Ways to Donate →
              </Link>
            </div>

            {/* Sponsor */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsorship</h3>
              <p className="text-gray-600 mb-4">
                For as little as 20p a day, you could provide multiple unwanted and homeless animals 
                each year with warm shelter, food, medical care and the love and happiness they deserve.
              </p>
              <Link href="/sponsor" className="text-gray-900 font-semibold hover:underline">
                Become a Sponsor →
              </Link>
            </div>

            {/* Volunteer */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Can you spare 3-4 hours each week? By volunteering with us you will meet new people, 
                gain new or use existing skills, and make a big difference to animal welfare.
              </p>
              <Link href="/volunteer" className="text-gray-900 font-semibold hover:underline">
                Get Involved →
              </Link>
            </div>

            {/* Legacy */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy</h3>
              <p className="text-gray-600 mb-4">
                Leave a gift in your will. A gift left in your Will is a great way to ensure that 
                your love of animals and interest in their well-being is continued into the future.
              </p>
              <Link href="/legacy" className="text-gray-900 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Membership */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Membership</h3>
              <p className="text-gray-600 mb-4">
                Your support helps us feed the animals in our care, give them excellent veterinary 
                treatment and provide them with toys and treats. Become a member today.
              </p>
              <Link href="/membership" className="text-gray-900 font-semibold hover:underline">
                Join Us →
              </Link>
            </div>

            {/* Outreach */}
            <div className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outreach</h3>
              <p className="text-gray-600 mb-4">
                Our Outreach Scheme supports individuals and families within our community who struggle 
                to make ends meet and provide food for themselves, their families and pets.
              </p>
              <Link href="/outreach" className="text-gray-900 font-semibold hover:underline">
                Find Out More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Amazon Wishlist */}
      <section className="py-10 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Amazon WishList</h2>
              <p className="text-gray-600">
                We always look forward to our Amazon deliveries! Many of our supporters like to help us 
                by buying things from the list that they know our animals will like.
              </p>
            </div>
            <a 
              href="https://www.amazon.co.uk/hz/wishlist/ls/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary whitespace-nowrap"
            >
              View Wishlist
            </a>
          </div>
        </div>
      </section>

      {/* Paw Prints Magazine */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Assisi Magazine</h2>
              <p className="text-gray-600">
                The latest (Autumn/Winter 2025) edition of our Paw Prints magazine is now available. 
                Call into your local Assisi shop to pick one up or read a digital copy online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Visit */}
      <section className="py-12 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-800">
                1 Old Bangor Road<br />
                Conlig, Newtownards<br />
                BT23 7PU
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-800">
                <a href="mailto:info@assisi-ni.org" className="hover:underline">info@assisi-ni.org</a><br />
                <a href="tel:02891812622" className="hover:underline">028 9181 2622</a>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
              <p className="text-gray-800">
                Find us on your favourite social media platforms for updates, photos and news.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
