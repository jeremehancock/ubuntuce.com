import React from 'react';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const Overview = () => {
  return (
    <div className="container mx-auto px-8 lg:flex mb-10 rounded-lg md:border md:border-solid md:border-gray-200 p-5 md:shadow-2xl m-5">
      <div className="text-left lg:w-1/2 lg:pr-10 mb-10">
        <h2 className="text-center text-2xl lg:text-4xl mb-12 md:mt-5">
          "freely ye have received, freely give"
        </h2>
        <p className="text-xl mt-6 font-light">
          Ubuntu Christian Edition (UbuntuCE) is a free, open source operating system geared
          towards Christians. It is based on{' '}
          <Href to="https://ubuntu.com/download/desktop" className="font-medium">
            Ubuntu 22.04 LTS
          </Href>
          .
        </p>
        <p className="text-xl mt-6 font-light">
          Ubuntu is a complete Linux-based operating system, freely available with both community
          and professional support.
        </p>
        <p className="text-xl mt-6 font-light">
          The goal of UbuntuCE is to bring the power and security of Ubuntu to Christians.
        </p>
      </div>
      <div className="lg:w-1/2 shadow-2xl">
        <StaticImage
          src="../../images/welcome-terminal.png"
          alt="Welcome To UbuntuCE"
          placeholder="blurred"
          className="bg-black min-h-full"
        />
      </div>
    </div>
  );
};

export default Overview;
