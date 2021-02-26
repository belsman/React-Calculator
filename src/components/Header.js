import React from 'react';
import Link from 'react-router-dom';

export default () => {
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <li className="link">
        <Link to='/'>Home</Link>
      </li>
      <li className="link">
        <Link to='/calculate'>Calculator</Link>
      </li>
      <li className="link">
        <Link to='/quote'>Quote</Link>
      </li>
    </nav>
  </header>;
};
