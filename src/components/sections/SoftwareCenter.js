import React from 'react';
import SplitSection from '../SplitSection';
import softwarecenter from "../../images/ubuntu-ce-software-center.png";

const SoftwareCenter = () => {
  return (
    <SplitSection
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            UbuntuCE Software Center
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Easily add and remove software using the UbuntuCE Software Center. This will allow you to easily configure UbuntuCE to meet your needs.
          </p>
        </div>
      }
      secondarySlot={<img src={softwarecenter} alt="UbuntuCE Software Center" />}
    />
  );
};

export default SoftwareCenter;
