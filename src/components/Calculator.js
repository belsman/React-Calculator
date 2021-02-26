import React from 'react';
import Header from './Header';
import App from './App';

export default () => {
  <>
    <Header />
    <div className="content">
      <div>
        <p>Let&apos;s do some math!</p>
      </div>
      <App />
    </div>
  </>;
};
