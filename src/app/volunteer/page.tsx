export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Become a Volunteer</h1>
          <p className="text-xl text-gray-800 mt-2">Let&apos;s help animals together</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Can you spare 3-4 hours each week? By volunteering with us you will meet new people, 
            gain new or use existing skills, gain experience and ultimately make a big difference 
            to animal welfare.
          </p>
          <p>
            Without our dedicated volunteers, we could not continue with the work we do – and there 
            is so much to do! Volunteering with us is very rewarding, you are helping us make a 
            difference to so many animals&apos; lives. We have several different volunteer roles – 
            there is something to suit everyone!
          </p>
          <p className="text-sm text-gray-600">
            *Volunteers / placements must be 18+ to help with our animals, in reception or participate 
            in fundraising events. Volunteers must be 16+ to help in our shops.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">At the Sanctuary</h2>
            <p className="text-gray-600">
              If you love animals, maybe you can help clean the kennels and walk the dogs, spend time 
              cuddling cats, or feed the small animals. If you would prefer something more indoors, 
              you could volunteer in Reception, meet and greet visitors, help with admin duties and 
              answering the telephone. If you&apos;re handy, help keep our site in great condition with 
              some general maintenance.
            </p>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Transport Drivers</h2>
            <p className="text-gray-600">
              If you like to drive, help us transport our animals to and from the vets, or support 
              our rehoming team as they travel around the country doing important rescue work. 
              (Driving volunteers must be 21+; conditions apply)
            </p>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">In our Shops</h2>
            <p className="text-gray-600">
              Our four shops in Bangor, Belfast, Holywood, and Newtownards need volunteers to work 
              shifts, help serve customers, sort stock, and make deliveries. The shops are a vital 
              source of income for the Sanctuary, so for just a few hours a week, you can make a 
              huge contribution to the work we do here!
            </p>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Fostering</h2>
            <p className="text-gray-600">
              Joining our fostering team is a fantastic way to help with the animals for those who 
              can&apos;t commit to a weekly shift at the Sanctuary. Maybe there is an overlooked golden 
              oldie searching for a retirement home, or an abandoned mum looking for a safe space to 
              raise her babies. Maybe there is a forgotten soul recovering from surgery or who has a 
              life-limiting illness. They may require daily medication or regular trips to the vet, 
              but you know you will be able to give them the love and quality of life they deserve. 
              You will be giving them a second chance, and in return you will receive unconditional 
              love; what more could anyone want!
            </p>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Fundraising &amp; Events</h2>
            <p className="text-gray-600 mb-4">
              Fundraising is crucial to the survival of the charity; the money goes straight to the 
              animals, paying for their food, vet bills, and care. There are so many ways you can help 
              us raise these indispensable funds and allow us to continue to care for and rescue many 
              more animals, such as volunteering at street collections, bag packs, and sponsored walks, 
              helping with collection cans, joining our support groups and more!
            </p>
            <p className="text-gray-600">
              You can contact our Fundraising Manager, Grace by email at{' '}
              <a href="mailto:grace@assisi-ni.org" className="underline">grace@assisi-ni.org</a>
              {' '}or by phone/text on 07598050096.
            </p>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Corporate Teams</h2>
            <p className="text-gray-600">
              Are you a company looking to support a charity? Then please consider nominating Assisi 
              as your chosen charity of the year! We will provide all the support and materials you 
              need to assist your organisation in all fundraising activity you chose to do. 
              Alternatively, volunteer your staff time to help at the Sanctuary. If you would like 
              to discuss corporate volunteering, email{' '}
              <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Placement / Work Experience</h2>
            <p className="text-gray-600">
              Are you currently studying for a career working with animals and need to complete a 
              practical module towards your qualification? Assisi believes education plays a 
              significant role in furthering the welfare of animals now and in the future, so why 
              not apply for one of our placement spaces to gain real-world experience in the animal 
              welfare sector!
            </p>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How do I get involved?</h2>
          <p className="text-gray-600 mb-4">
            It&apos;s easy! If you are interested in volunteering with us, please contact us for a chat 
            about how you might be able to help in our work to protect and care for stray or unwanted 
            companion animals.
          </p>
          <p className="text-gray-600 mb-6">
            On occasion, we are unable to guarantee there will be a space available for you on your 
            preferred day, so we will contact you with other options to see if there are any other 
            days that suit or work for you.
          </p>
          <p className="text-gray-700 font-medium">
            Contact us at{' '}
            <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
            {' '}or call{' '}
            <a href="tel:02891812622" className="underline">028 9181 2622</a>
          </p>
        </div>
      </div>
    </div>
  );
}
