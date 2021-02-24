import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  return (
    <div id="btn-panel">
      <div className="btn-panel-row">
        <Button buttonName="AC" buttonClass="basic-operator" clickHandler={clickHandler} />
        <Button buttonName="+/-" buttonClass="basic-operator" clickHandler={clickHandler} />
        <Button buttonName="%" buttonClass="basic-operator" clickHandler={clickHandler} />
        <Button buttonName="÷" buttonClass="basic-operator" clickHandler={clickHandler} />
      </div>
      <div className="btn-panel-row">
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button buttonName="x" buttonClass="basic-operator" clickHandler={clickHandler} />
      </div>
      <div className="btn-panel-row">
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button buttonName="-" buttonClass="basic-operator" clickHandler={clickHandler} />
      </div>
      <div className="btn-panel-row">
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button buttonName="+" buttonClass="basic-operator" clickHandler={clickHandler} />
      </div>
      <div className="btn-panel-row">
        <Button buttonName="0" buttonClass="flex-basis-50" clickHandler={clickHandler} />
        <Button buttonName="." buttonClass="flex-basis-25" clickHandler={clickHandler} />
        <Button buttonName="=" buttonClass="basic-operator flex-basis-25" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
