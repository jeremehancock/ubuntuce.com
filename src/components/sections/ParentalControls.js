import React from 'react';
import SplitSection from '../SplitSection';

import { StaticImage } from 'gatsby-plugin-image';

const ParentalControls = () => {
  return (
    <SplitSection
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Parental Controls</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Setting up a computer for your children can be scary and frustrating. UbuntuCE comes
            with built-in Parental Controls to help ensure that you have control over your system to
            help protect your family.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../../images/parental-controls.png"
          alt="Parental Controls"
          placeholder="blurred"
        />
      }
    />
  );
};

export default ParentalControls;
