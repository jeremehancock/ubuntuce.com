import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-5 md:py-16">
    <div className="container mx-auto px-8 items-center flex flex-col lg:flex-row rounded-lg border border-solid border-gray-200 p-5 shadow-2xl">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
