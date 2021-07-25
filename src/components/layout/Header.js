import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Href from '../Href';

const Header = () => (
  <header className="sticky top-0 bg-mineshaft shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto px-8 md:h-20">
      <div className="flex items-center text-2xl text-white">
        <div className="w-16">
          <AnchorLink href="#top">
            <LogoIcon />
          </AnchorLink>
        </div>
        <AnchorLink href="#top" className="text-white hover:text-white">UbuntuCE</AnchorLink>
      </div>
      <ul className="flex items-center md:h-20 pb-4 md:pb-0">
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white hover:underline flex items-center h-full"
            href="#features"
          >
            Features
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white hover:underline flex items-center h-full"
            href="#screenshots"
          >
            Screenshots
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white hover:underline flex items-center h-full"
            href="#contributors"
          >
            Contributors
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white hover:underline flex items-center h-full"
            href="#faq"
          >
            FAQ
          </AnchorLink>
        </li>
        <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
          <AnchorLink
            className="px-4 text-white hover:text-white hover:underline flex items-center h-full"
            href="#download"
          >
            Download
          </AnchorLink>
        </li>
      </ul>
      <div className="hidden md:block">
        <Href
          to="https://www.patreon.com/ubuntuce"
          className="bg-patreon hover:text-white hover:bg-patreon-darker rounded-xl p-4 text-white font-bold"
        >
          Become a Patron
        </Href>
      </div>
    </div>
  </header>
);

export default Header;
