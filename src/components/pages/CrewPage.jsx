import PageHeader from "../shared/PageHeader";
import data from "../../data.json";
import { useState } from "react";


function CrewPage() {
  const { crew } = data;
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);

  return (
    <div className="lg:max-w-277 lg:mx-auto">
      <PageHeader number="02" title="Meet your crew" />
      <div className="md:max-w-148 md:mx-auto lg:max-w-none">
        <div className="md:flex md:flex-col-reverse lg:flex-row-reverse lg:justify-between ">
          <div className="md:flex md:flex-col-reverse">
            <div className=" border-b-2 border-primary mt-8 mb-8 lg:m-0">
              <img className="mx-auto h-crew md:w-md-crew md:h-md-crew lg:h-auto lg:min-w-112" src={selectedCrewMember.images.webp} />
            </div>
          </div>
          <div className="md:flex md:flex-col-reverse text-center lg:text-left lg:justify-between lg:gap-30 lg:min-h-176">
            <div className="flex flex-row justify-center align-middle gap-7 mb-8 h-nav-dot lg:justify-start lg:mb-28">
              {crew.map((crewMember) => (
                <div key={crewMember.name}>
                  <button onClick={() => setSelectedCrewMember(crewMember)} className={`h-nav-dot w-nav-dot lg:h-lg-nav-dot lg:w-lg-nav-dot rounded-full hover:bg-hover hover:opacity-100 ${crewMember.name === selectedCrewMember.name ? "bg-white" : "bg-inactive opacity-17"}`}></button>
                </div>
              ))}
            </div>
            <div className="lg:max-w-154">
              <p className="uppercase font-secondary text-base opacity-50 md:text-md-h4 md:mt-15 lg:text-lg-h4 lg:mt-38">{selectedCrewMember.role}</p>
              <h3 className="uppercase mb-4 md:text-md-h3 lg:text-lg-h3 lg:mt-4">{selectedCrewMember.name}</h3>
              <p className="text-secondary mb-10 md:text-base lg:text-lg lg:max-w-111 lg:mb-0">{selectedCrewMember.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;