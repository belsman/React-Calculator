import Button from './Button';

class ButtonPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(buttonName) {
    return this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div id="btn-panel">
        <div className="btn-panel-row">
          <Button buttonName="AC" buttonClass="basic-operator" clickHandler={this.handleClick} />
          <Button buttonName="+/-" buttonClass="basic-operator" clickHandler={this.handleClick} />
          <Button buttonName="%" buttonClass="basic-operator"  clickHandler={this.handleClick} />
          <Button buttonName="÷" buttonClass="basic-operator" clickHandler={this.handleClick} />
        </div>
        <div className="btn-panel-row">
          <Button buttonName="7" clickHandler={this.handleClick} />
          <Button buttonName="8" clickHandler={this.handleClick} />
          <Button buttonName="9" clickHandler={this.handleClick} />
          <Button buttonName="x" buttonClass="basic-operator" clickHandler={this.handleClick} />
        </div>
        <div className="btn-panel-row">
          <Button buttonName="4" clickHandler={this.handleClick} />
          <Button buttonName="5" clickHandler={this.handleClick} />
          <Button buttonName="6" clickHandler={this.handleClick} />
          <Button buttonName="-" buttonClass="basic-operator" clickHandler={this.handleClick} />
        </div>
        <div className="btn-panel-row">
          <Button buttonName="1" clickHandler={this.handleClick} />
          <Button buttonName="2" clickHandler={this.handleClick} />
          <Button buttonName="3" clickHandler={this.handleClick} />
          <Button buttonName="+" buttonClass="basic-operator" clickHandler={this.handleClick} />
        </div>
        <div className="btn-panel-row">
          <Button buttonName="0" buttonClass="flex-basis-50" clickHandler={this.handleClick} />
          <Button buttonName="." buttonClass="flex-basis-25" clickHandler={this.handleClick} />
          <Button buttonName="=" buttonClass="basic-operator flex-basis-25" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

const ButtonPanel = () => 

export default ButtonPanel;
