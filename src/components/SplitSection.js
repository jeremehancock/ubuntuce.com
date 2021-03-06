import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-5 md:py-16 md:mx-10">
    <div className="container mx-auto px-8 items-center flex flex-col lg:flex-row rounded-lg md:border md:border-solid md:border-gray-200 p-5 md:shadow-2xl">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 text-center ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
