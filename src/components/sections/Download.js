import React from 'react';
import Href from '../Href';
import Button from '../Button';
import Netlify from '../../images/netlify.svg';
import { StaticImage } from 'gatsby-plugin-image';

const Download = () => {
  return (
    <div className="container mx-auto mb-16 rounded-lg md:border md:border-solid md:border-gray-200 text-center pb-10 md:pt-10 md:shadow-2xl">
      <h3 className="text-xl md:text-5xl font-semibold">Ready to try UbuntuCE?</h3>
      <p className="mt-8 flex flex-col md:flex-row justify-center text-center items-center">
        <Href to="https://docs.ubuntuce.com/" className="mb-3 md:mb-0 md:mr-3">
          <Button className="w-full">
            <img src="/docs.png" alt="" className="inline mr-2 -mt-1" />
            <span className="text-xl"> Documentation</span>
          </Button>
        </Href>
        <Href
          to="https://sourceforge.net/projects/ubuntuce/files/ubuntu-ce-latest.torrent/download"
          className="mb-3 md:mb-0 md:mr-3"
        >
          <Button className="w-full text-xl">Download Torrent</Button>
        </Href>
        <Href
          to="https://sourceforge.net/projects/ubuntuce/files/latest/download"
        >
          <img
            alt="Download UbuntuCE"
            src="/sf-download-button.png"
            width="300"
          />
        </Href>
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <div>Already running Ubuntu 22.04?</div>
        <div>
          <Href to="https://docs.ubuntuce.com/getting-started/ubuntu-ce-repository">
            Checkout the UbuntuCE Software Center.
          </Href>
        </div>
      </div>
      <div className="mx-10">
        <div className="flex justify-center items-center md:justify-between mt-10 lg-mt-0 flex-col-reverse md:flex-row gap-6">
          <div className="mt-5">
            <a href="https://www.netlify.com">
              <img src={Netlify} alt="Deploys by Netlify" />
            </a>
          </div>
          <div className="flex justify-start flex-col-reverse md:flex-row gap-6">
            <div className="flex justify-center gap-2">
              <Href to="https://sourceforge.net/projects/ubuntuce/">
                <img src="/oss-users-love-us-white.png" alt="Source Forge Our Customers Love Us" />
              </Href>

              <Href to="https://sourceforge.net/projects/ubuntuce/">
                <img src="/oss-rising-star-white.png" alt="SourceForge Rising Star" />
              </Href>
            </div>
            <Href to="https://www.patreon.com/ubuntuce" className="visible lg:hidden mt-1 md:mt-2">
              <StaticImage
                src="../../images/patreon.png"
                alt="Become a Patron"
                height={100}
                placeholder="none"
              />
            </Href>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
