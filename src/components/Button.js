import PropTypes from 'prop-types';

const Button = ({ buttonName, buttonClass }) => (
  <button type="button" className={buttonClass}>
    { buttonName }
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string,
  buttonClass: PropTypes.string,
};

Button.defaultProps = {
  buttonClass: 'button',
  buttonName: 'button',
};

export default Button;
