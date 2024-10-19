import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MobileNav({handleOverlayClick, handleMobileNavToggle}) {
  return (
    <div className="absolute inset-0 flex justify-end z-40" onClick={handleOverlayClick}>
      <nav 
        className="w-64 bg-white bg-opacity-5 backdrop-blur-2xl h-full p-8 pt-29 overflow-auto " 
        onClick={e => e.stopPropagation()}
      >
        <ul className="uppercase text-primary flex flex-col gap-8 font-secondary">
          <li>
            <Link to="/space-tourism-website/" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">00</span>Home</Link>
          </li>
          <li>
            <Link to="/space-tourism-website/destination" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">01</span>Destination</Link>
          </li>
          <li>
            <Link to="/space-tourism-website/crew" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">02</span>Crew</Link>
          </li>
          <li>
            <Link to="/space-tourism-website/technology" className="tracking-nav" onClick={handleMobileNavToggle}><span className="inline-block min-w-9 font-bold">03</span>Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

MobileNav.propTypes = {
  handleOverlayClick: PropTypes.func.isRequired,
  handleMobileNavToggle: PropTypes.func.isRequired
};

export default MobileNav;