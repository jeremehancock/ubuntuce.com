import React from 'react';

const Href = ({ children, to, newTab= true, className = '' }) => {
  return (
    <a
      href={to}
      target={newTab && "_blank"}
      rel={newTab && "noreferrer"}
      className={className}
    >
      {children}
    </a>
  );
};

export default Href;
