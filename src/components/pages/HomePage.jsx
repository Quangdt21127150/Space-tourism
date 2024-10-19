import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-between gap-20 md:gap-39 lg:flex-row lg:items-end lg:justify-center lg:gap-desktop lg:max-w-277 lg:mx-auto lg:mb-15">
        <div className="mt-12 mx-auto text-center max-w-112 md:mt-26 lg:mt-63 lg:text-left">
          <h5 className="uppercase font-primary-condensed text-secondary md:tracking-md-h5 md:text-md-h5 lg:text-lg-h5 lg:tracking-lg">So, you want to travel to</h5>
          <h1 className="uppercase md:text-md-h1">Space</h1>
          <p className="text-secondary md:max-w-103 md:mx-auto md:text-base lg:text-lg lg:m-0 lg:leading-lg lg:max-w-none">Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
        </div>
        <div>
          <Link to="/space-tourism-website/destination">
            <button
              className="uppercase h-mobile-button w-mobile-button md:h-tablet-button md:w-tablet-button lg:h-desktop-button lg:w-desktop-button bg-white rounded-full text-tertiary text-md-h5 tracking-wider block mx-auto mt-2 pt-2 md:mt-0 md:text-lg-h4 hover:shadow-outline"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;