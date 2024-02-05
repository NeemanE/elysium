export default function Services() {
  return (
    <section className="services flex flex-row gap-24 justify-center my-8">
      <div className="card w-96 glass">
        <figure>
          <img src="/images/car.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car rentals</h2>
          <p>
            We have all kinds of cars for you to rent, with flexible rental
            periods.
          </p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Learn More
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Choose from our selection of modern and fuel-efficient
                  vehicles, including compact cars for urban adventures,
                  spacious SUVs for family getaways, and luxurious sedans for a
                  touch of elegance. Our rental process is seamless, ensuring a
                  hassle-free experience from reservation to return.
                </h3>
                <p className="py-4">
                  Experience the freedom to explore at your own pace with
                  Doha Trading's car rental service. We are committed to delivering
                  quality service, flexibility, and convenience, allowing you to
                  make the most of your journey, wherever it may take you."
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img src="/images/limo.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Limousine Rentals</h2>
          <p>
            Have an event or want to take your friends out in style? We offer
            luxury limousines for hire.
          </p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Learn More
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  At Doha Trading, our limousine service is crafted to add a touch of
                  luxury and sophistication to your special occasions and
                  executive travels. Whether you're celebrating a milestone
                  event, attending a business meeting, or simply desire a
                  prestigious mode of transportation, our fleet of elegant
                  limousines awaits.
                </h3>
                <p className="py-4">
                  At Doha Trading, we understand the importance of punctuality and
                  reliability, and our limousine service reflects those values.
                  Let us elevate your travel experience with unparalleled
                  luxury, impeccable service, and a commitment to exceeding your
                  expectations. For those moments when ordinary transportation
                  simply won't suffice, trust Doha Trading for an extraordinary
                  limousine experience."
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img src="/images/apartment.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Need more than just a ride?</h2>
          <p>
            We have you covered with apartment rentals to accomodate your stay.
          </p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Learn More
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  At Doha Trading, we take pride in offering exceptional apartment
                  rentals tailored to meet your lifestyle and accommodation
                  needs. Whether you're on a short-term business trip, a family
                  vacation, or seeking a comfortable long-term residence, our
                  range of thoughtfully curated apartments ensures a home away
                  from home.
                </h3>
                <p className="py-4">
                  Our apartments are strategically located in prime areas,
                  providing convenient access to local attractions, business
                  districts, and amenities. Each unit is designed with your
                  comfort in mind, featuring modern furnishings, fully equipped
                  kitchens, and stylish decor. Whether you prefer a cozy studio,
                  a spacious one-bedroom, or a family-friendly multi-bedroom
                  apartment, we have a diverse range of options to suit your
                  preferences.
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
