import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-5 md:py-20">
    <div className="container mx-auto px-8 items-center flex flex-col lg:flex-row rounded-lg border border-solid border-solid border-none md:border-gray-200 p-5 lg:shadow-2xl">
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
