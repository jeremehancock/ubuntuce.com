import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p className={`text-3xl tracking-wider ${className}`}>{children}</p>
);

export default LabelText;
