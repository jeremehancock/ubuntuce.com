import React from 'react';
import SplitSection from '../SplitSection';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const TimeKpr = () => {
  return (
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Set Time Limits</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Help keep track of screen time with {" "}
            <Href to="https://mjasnik.gitlab.io/timekpr-next/" className="font-medium">
              TimeKpr-nExT
            </Href>
            . This a great way to keep yourself on task as well as keeping the kids from spending
            too much time on the computer.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage
          src="../../images/timekpr-next.png"
          alt="Host Minder"
          placeholder="blurred"
        />
      }
    />
  );
};

export default TimeKpr;
