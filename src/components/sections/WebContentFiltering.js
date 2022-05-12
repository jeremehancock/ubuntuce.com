import React from 'react';
import SplitSection from '../SplitSection';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const WebContentFiltering = () => {
  return (
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Web Content Filtering
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            UbuntuCE is pre-configured with{' '}
            <Href to="https://cleanbrowsing.org/" className="font-medium">
              CleanBrowsing
            </Href>
            , an industry-leading DNS provider that offers fast, secure, DNS with state-of-the art
            content filtering.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../../images/cleanbrowsing.png"
          alt="CleanBrowsing"
          placeholder="blurred"
        />
      }
    />
  );
};

export default WebContentFiltering;
