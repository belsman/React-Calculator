/* eslint-disable no-unused-vars */
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <div className="container">
      <Display result="0" />
      <ButtonPanel />
    </div>
  </>
);

export default App;
