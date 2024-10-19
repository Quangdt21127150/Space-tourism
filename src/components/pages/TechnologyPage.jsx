import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";
import PropTypes from 'prop-types';

function TechnologyPage({ windowWidth }) {
  const { technology } = data;
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  let imagePath;

  if (windowWidth >= 1440) {
    imagePath = selectedTechnology.images.portrait;
  } else {
    imagePath = selectedTechnology.images.landscape;
  }

  return (
    <div className="lg:max-w-277 lg:mx-auto">
      <PageHeader number="03" title="Space launch 101" />
      {/* The following div is an empty div used to make space for the absolutely positioned image below.*/}
      {windowWidth < 1440 && <div className="mt-8 md:mt-14" style={{ paddingTop: '45.3%' }} /> }
      <img src={imagePath} alt={`${selectedTechnology.name}`} className="mt-14 md:mt-21 absolute left-0 top-0 w-full lg:w-129 lg:left-auto lg:right-0 lg:bottom-25 lg:mt-12" />
      <div className="lg:flex lg:gap-20 lg:justify-normal lg:mt-34">
        <div className="flex justify-center gap-7 mt-12 md:my-12 lg:flex-col lg:mt-0">
          {technology.map((tech, index) => (
            <div key={tech.name}>
              <button
                onClick={() => setSelectedTechnology(tech)}
                className={`block font-secondary text-sub h-10 w-10 md:h-15 md:w-15 md:text-md-h4 rounded-full border border-white leading-10 lg:text-lg-h4 lg:w-20 lg:h-20 hover:border-white ${tech.name === selectedTechnology.name ? "text-tertiary bg-white" : " border-opacity-25"}`}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center lg:text-left">
          <p className="mt-6 uppercase text-sub font-primary-condensed tracking-subhead md:text-base opacity-50 lg:mt-0">the terminology...</p>
          <h3 className="mt-2 uppercase md:text-md-h3 lg:text-lg-h3">{selectedTechnology.name}</h3>
          <p className="mt-4 text-secondary md:text-base md:max-w-114 md:mx-auto lg:text-lg lg:m-0">{selectedTechnology.description}</p>
        </div>
      </div>
    </div>
  );
}

TechnologyPage.propTypes = {
  windowWidth: PropTypes.number.isRequired
};

export default TechnologyPage;