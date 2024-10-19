import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";

function DestinationPage() {
  const { destinations } = data;
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <div className="lg:max-w-277 lg:mx-auto">
      <PageHeader number="01" title="Pick your destination" />
      <div className="md:max-w-143 md:mx-auto lg:max-w-none lg:min-h-118 lg:flex lg:justify-between lg:items-end lg:gap-39 lg:mt-16">
        <div>
          <img
            className="h-planet w-planet mx-auto mt-8 mb-6 md:h-planet-tablet md:w-planet-tablet md:mt-15 md:mb-13 lg:h-planet-desktop lg:w-planet-desktop lg:m-0 lg:ml-10"
            src={selectedDestination.images.webp}
          />
        </div>
        <div className="lg:max-w-111 lg:text-left lg:">
          <div className="flex flex-row justify-center gap-7 mb-5 lg:justify-start">
          {destinations.map((destination) => (
              <div key={destination.name}>
                <button
                  onClick={() => setSelectedDestination(destination)}
                  className={`block uppercase font-primary-condensed text-sub md:text-base hover:border-b-3 hover:border-hover hover:pb-2 ${destination.name === selectedDestination.name ? "text-primary border-b-3 pb-2" : "text-secondary"}  tracking-nav`}
                >
                  {destination.name}
                </button>
              </div>
          ))}
          </div>
          <h2 className="uppercase text-center md:text-md-h2 lg:text-left lg:text-lg-h2">{selectedDestination.name}</h2>
          <p className="text-center text-secondary md:text-base lg:text-left lg:text-lg lg:leading-lg">{selectedDestination.description}</p>
          <hr className="border-primary my-8 md:mt-12 md:mb-7 lg:mt-13" />
          <div className="md:flex md:justify-center md:gap-3 lg:justify-start">
            <div className="md:min-w-56 lg:min-w-none">
              <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub lg:text-left">Avg. Distance</p>
              <p className="text-center text-lg-h5 font-secondary mt-3 uppercase lg:text-left">{selectedDestination.distance}</p>
            </div>
            <div className="md:min-w-56 lg:min-w-none">
              <p className="uppercase text-center tracking-subhead font-primary-condensed text-secondary text-sub mt-8 md:mt-0 lg:text-left">EST. Travel Time</p>
              <p className="text-center text-lg-h5 font-secondary mt-3 uppercase mb-14 md:mb-0 lg:text-left">{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;