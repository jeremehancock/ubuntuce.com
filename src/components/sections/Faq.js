import React from 'react';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const Faq = () => {
  return (
    <div className="container mx-auto rounded-lg md:border md:border-solid md:border-gray-200 p-10 md:shadow-2xl">
      <div>
        <div className="mb-3 font-bold text-xl italic">
          Is UbuntuCE officially supported by Canonical?
        </div>
        <div className="mb-3">
          <div className="pl-3">
            No, it is not "officially" supported. Our project is not funded by Canonical. However,
            we have contacted them regarding our project and they have given us guidelines to follow
            and have thanked us for supporting the Ubuntu Community and introducing Ubuntu to the
            Christian Community.
          </div>
        </div>
        <div className="mb-3 font-bold text-xl italic">
          Is UbuntuCE a new distribution of Ubuntu or a derivative?
        </div>
        <div className="mb-3">
          <div className="pl-3">
            Well it is really neither. UbuntuCE is based directly from the standard Ubuntu
            distribution and contains extra Christian software and is pre-configured with web
            content filtering. The graphical changes are minor and are only intended to tailor the
            project to Christians.
          </div>
        </div>
        <div className="mb-3 font-bold text-xl italic">
          Why should I use UbuntuCE if I can install the same software on Ubuntu itself?
        </div>
        <div className="mb-3">
          <div className="pl-3">
            The concept behind UbuntuCE is not to deviate from the Ubuntu community. It is
            intended to draw a larger Christian base to the already thriving community of Ubuntu
            users. UbuntuCE simply makes it easier for Christians who are new to Linux to see the
            power of Ubuntu combined with the added benefit of having the best available Linux
            Christian software pre-installed.
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center text-lg md:text-xl italic mt-10 md:mt-6 font-bold">
          Got additional questions?{' '}
          <span className="hidden md:inline md:ml-2">
            {' '}
            <Href to="mailto:support@ubuntuce?subject=UbuntuCE Slack Invite Request&body=Please send me an invite to the UbuntuCE Slack.">
              Join us on
            </Href>
          </span>
          <Href
            to="mailto:support@ubuntuce.com?subject=UbuntuCE Slack Invite Request&body=Please send me an invite to the UbuntuCE Slack."
            className="ml-2"
          >
            <div className="w-20 md:w-40">
              <StaticImage src="../../images/slack.png" alt="Join us on Slack" placeholder="blurred" />
            </div>
          </Href>
        </div>
      </div>
    </div>
  );
};

export default Faq;
