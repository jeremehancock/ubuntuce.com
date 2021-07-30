import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-5 rounded-lg border border-solid border-gray-200 shadow-2xl ${className}`}>
    {children}
  </div>
);

export default Card;
