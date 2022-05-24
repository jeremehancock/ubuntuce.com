import React from 'react';
import Href from '../Href';
import Button from '../Button';
import Netlify from '../../images/netlify.svg';
import { StaticImage } from 'gatsby-plugin-image';

const Download = () => {
  return (
    <div className="container mx-auto mb-16 rounded-lg md:border md:border-solid md:border-gray-200 text-center px-10 pb-10 md:pt-10 md:shadow-2xl">
      <h3 className="text-xl md:text-5xl font-semibold">Ready to try UbuntuCE?</h3>
      <p className="mt-8 flex flex-col md:flex-row justify-center text-center items-center">
        {/*<Href*/}
        {/*  to="https://sourceforge.net/projects/ubuntuce/files/ubuntu-ce-latest.torrent/download"*/}
        {/*  className="mb-3 md:mb-0 md:mr-2"*/}
        {/*>*/}
        {/*  <Button className="w-full">Torrent Download</Button>*/}
        {/*</Href>*/}
        <Href
          to="https://docs.ubuntuce.com/"
          className="mb-3 md:mb-0 md:mr-2"
        >
          <Button className="w-full"><img src="/docs.png" alt="" className="inline mr-2 -mt-1" /><span className="text-xl"> Documentation</span></Button>
        </Href>
        <Href
          to="https://sourceforge.net/projects/ubuntuce/files/latest/download"
          className="md:ml-2"
        >
          <img
            alt="Download UbuntuCE"
            src="https://a.fsdn.com/con/app/sf-download-button"
            width="276"
            height="48"
            srcSet="https://a.fsdn.com/con/app/sf-download-button?button_size=2x 2x"
          />
        </Href>
      </p>
      <p className="mt-5">
        Already running Ubuntu 22.04?{' '}
        <Href to="https://docs.ubuntuce.com/getting-started/ubuntu-ce-repository">
          Install the UbuntuCE Software Center
        </Href>
        .
      </p>
      <div className="mx-0">
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
