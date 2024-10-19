import PropTypes from 'prop-types';

function LogoIcon({ width = 40, height = 40, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={24} cy={24} r={24} fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  );
}

LogoIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default LogoIcon;