import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div id="display">
      <div className="user-input">{ result || 0 }</div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'div',
};

export default Display;
