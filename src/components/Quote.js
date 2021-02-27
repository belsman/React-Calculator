import React from 'react';

const Quote = () => (
  <div className="content">
    <p
      className="quotes"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        textAlign: 'center',
        fontSize: '1.3rem',
      }}
    >
      Mathematics is about numbers, equations, computations, or
      algorithms: it is about understanding. -- William Paul Thurston
    </p>
  </div>
);

export default Quote;
