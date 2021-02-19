import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div id="display">
    <div className="user-input">{ result }</div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'div',
};

export default Display;
