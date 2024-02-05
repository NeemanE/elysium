export default function About() {
  return (
    <section className="flex items-center">
      <div className="w-1/2 p-8">
        <div className="pl-10">
          <h1 className="text-2xl text-blue-500 py-4 italic">
            A new way to experience Houston
          </h1>
          <h2 className="text-5xl font-bold py-4">Welcome to Elysium</h2>
          <p className="text-3xl font-light py-4">
            At Elysium, we take pride in providing exceptional services in the
            realm of transportation and accommodation. With a rich history in
            the industry, we have become a trusted name for individuals seeking
            reliable and convenient options for their travel needs. Whether
            you're looking for a comfortable and stylish car rental, a cozy and
            well-appointed apartment for your stay, or a luxurious limousine
            service, we have you covered. Our commitment to quality, customer
            satisfaction, and attention to detail sets us apart. At the core of
            our mission is the belief that every journey should be not just a
            trip, but an experience. Discover the difference with Elysium -
            where excellence meets every mile and every moment.
          </p>
          <a
            className="btn bg-orange-500 hover:bg-black text-white text-lg p-0 px-5"
            href="tel:(469)-427-7371"
          >
            phone
          </a>
        </div>
      </div>
      <div className="w-1/2 p-8">
        <img src="/images/park.jpg"></img>
      </div>
    </section>
  );
}
