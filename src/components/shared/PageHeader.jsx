import PropTypes from 'prop-types';

function PageHeader({number, title}) {
  return (
    <>
      <h5 className="uppercase font-primary-condensed text-center mt-6 md:mt-10 md:text-start md:text-xl lg:text-lg-h5 lg:mt-19">
        <span className="opacity-25 pr-4 font-bold">{number}</span>
        {title}
      </h5>
    </>
  );
}

PageHeader.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PageHeader;