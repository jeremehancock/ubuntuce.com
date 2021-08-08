import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header className="sticky top-0 bg-mineshaft shadow z-10">
    <div className="container flex flex-col sm:flex-row justify-around mx-auto md:px-8 md:h-20">
      <div className="flex justify-between items-center text-2xl text-white mb-5 md:mb-0">
        <div className="w-16">
          <AnchorLink href="#top" offset="130">
            <LogoIcon />
          </AnchorLink>
        </div>
        <div className="flex-1">
          <AnchorLink href="#top" className="text-white hover:text-white" offset="130">
            UbuntuCE
          </AnchorLink>
        </div>
        <div className="md:hidden mr-2 mt-2">
          <Href to="https://www.patreon.com/ubuntuce">
            <StaticImage
              src="../../images/patreon.png"
              alt="Become a Patron"
              height={60}
              placeholder="none"
            />
          </Href>
        </div>
      </div>
      <ul className="flex justify-center items-center md:h-20 pb-4 md:pb-0">
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white flex items-center h-full"
            href="#features"
            offset="130"
          >
            Features
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white flex items-center h-full"
            href="#contributors"
            offset="130"
          >
            Contributors
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white flex items-center h-full"
            href="#faq"
            offset="130"
          >
            FAQ
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white flex items-center h-full"
            href="#download"
            offset="130"
          >
            Download
          </AnchorLink>
        </li>
      </ul>
      <div className="hidden lg:block mt-2">
        <Href to="https://www.patreon.com/ubuntuce">
          <StaticImage
            src="../../images/patreon.png"
            alt="Become a Patron"
            height={65}
            placeholder="none"
          />
        </Href>
      </div>
    </div>
  </header>
);

export default Header;
