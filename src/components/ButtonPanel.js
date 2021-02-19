import Button from './Button';

const ButtonPanel = () => (
  <div id="btn-panel">
    <div className="btn-panel-row">
      <Button buttonName="AC" buttonClass="basic-operator" />
      <Button buttonName="+/-" buttonClass="basic-operator" />
      <Button buttonName="%" buttonClass="basic-operator" />
      <Button buttonName="÷" buttonClass="basic-operator" />
    </div>
    <div className="btn-panel-row">
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="x" buttonClass="basic-operator" />
    </div>
    <div className="btn-panel-row">
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" buttonClass="basic-operator" />
    </div>
    <div className="btn-panel-row">
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" buttonClass="basic-operator" />
    </div>
  </div>
);

export default ButtonPanel;
