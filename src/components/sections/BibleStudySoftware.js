import React from 'react';
import SplitSection from '../SplitSection';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const BibleStudySoftware = () => {
  return (
    <SplitSection
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Bible Study Software
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We have included the best Bible Study software available for Linux. Including:{' '}
            <Href to="https://bibletime.info/" className="font-medium">
              BibleTime
            </Href>
            ,{' '}
            <Href to="https://xiphos.org/" className="font-medium">
              Xiphos
            </Href>
            ,{' '}
            <Href to="https://bibledit.org/" className="font-medium">
              Bibledit
            </Href>
            , and more.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage src="../../images/xiphos.png" alt="Xiphos" placeholder="blurred" />
      }
    />
  );
};

export default BibleStudySoftware;
