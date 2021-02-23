import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(buttonName) {
    return this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick} className={buttonClass}>
        { buttonName }
      </button>
    );
  }
}


Button.propTypes = {
  buttonName: PropTypes.string,
  buttonClass: PropTypes.string,
};

Button.defaultProps = {
  buttonClass: 'button',
  buttonName: 'button',
};

export default Button;
