import React from 'react';
import SplitSection from '../SplitSection';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const SoftwareForChurches = () => {
  return (
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Software for Churches
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            UbuntuCE is a great choice for Churches and includes{' '}
            <Href to="https://openlp.org/" className="font-medium">
              OpenLP
            </Href>
            ,{' '}
            <Href to="https://www.worshipextreme.com/presenter" className="font-medium">
              Presenter by WorshipTools
            </Href>
            , {' '}
            <Href to="https://freeshow.app" className="font-medium">
              FreeShow
            </Href>
            , and more.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../../images/presenter-job.png"
          alt="Presenter by WorshipTools"
          placeholder="blurred"
        />
      }
    />
  );
};

export default SoftwareForChurches;
