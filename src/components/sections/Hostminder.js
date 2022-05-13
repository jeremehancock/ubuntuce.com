import React from 'react';
import SplitSection from "../SplitSection";
import Href from "../Href";
import { StaticImage } from "gatsby-plugin-image";


const HostMinder = () => {
  return (
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Host Minder</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <Href to="https://github.com/jeremehancock/hostminder#readme" className="font-medium">
              Host Minder
            </Href>{' '}
            is a simple application built with UbuntuCE in mind. It provides an easy way to block
            unwanted websites from your system.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage src="../../images/hostminder.png" alt="Host Minder" placeholder="blurred" />
      }
    />
  );
};

export default HostMinder;
