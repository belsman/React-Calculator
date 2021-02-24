import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, buttonClass, clickHandler } = props;
  return (
    <button type="button" onClick={() => clickHandler(buttonName)} className={buttonClass}>
      { buttonName }
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  buttonClass: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonClass: 'button',
  buttonName: 'button',
};

export default Button;
