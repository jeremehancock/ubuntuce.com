import React from 'react';
import SplitSection from '../SplitSection';
import wallpapers from "../../images/wallpapers.webp";

const Wallpapers = () => {
  return (
    <SplitSection
      reverseOrder={true}
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Beautiful Wallpapers
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            UbuntuCE is packed with a ton of beautiful Christian themed wallpapers to help you
            make your desktop fit you.
          </p>
        </div>
      }
      secondarySlot={<img src={wallpapers} alt="UbuntuCE Wallpapers" />}
    />
  );
};

export default Wallpapers;
