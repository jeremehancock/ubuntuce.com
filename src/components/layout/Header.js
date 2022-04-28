import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <>
    <head>
    <title>Ubuntu Christian Edition -- Linux For Christians</title>
    <meta charSet="utf-8" />
    <meta
      name="keywords"
      content="ubuntu christian edition, christian edition, christian linux, linux for christians, linux software, christian programs, ubuntu forums,ubuntu linux,ubuntu,linux fourm,ubunut forum,linux ubuntu,ubuntu support,ubuntu help,ubuntu linux help"
    />
    <meta name="title" content="Ubuntu Christian Edition -- Linux For Christians" />
    <meta name="description" content="This is the project page for Ubuntu Christian Edition." />
    <link rel="apple-touch-icon" sizes="180x180" href="https://ubuntuce.com/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://ubuntuce.com/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://ubuntuce.com/favicon-16x16.png" />
    <link rel="manifest" href="https://ubuntuce.com/site.webmanifest" />
    <link rel="mask-icon" href="https://ubuntuce.com/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ubuntuce.com/" />
    <meta property="og:title" content="Ubuntu Christian Edition -- Linux For Christians" />
    <meta
      property="og:description"
      content="This is the project page for Ubuntu Christian Edition."
    />
    <meta property="og:image" content="https://ubuntuce.com/bible-laptop.jpg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ubuntuce.com/" />
    <meta property="twitter:title" content="Ubuntu Christian Edition -- Linux For Christians" />
    <meta
      property="twitter:description"
      content="This is the project page for Ubuntu Christian Edition."
    />
    <meta property="twitter:image" content="https://ubuntuce.com/bible-laptop.jpg" />
    </head>
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
        </div>
        <ul className="flex justify-center items-center md:h-20 pb-4 md:pb-0 flex-wrap gap-3">
          <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
            <AnchorLink
              className="px-1 md:px-4 text-white hover:text-white flex items-center h-full"
              href="#features"
              offset="130"
            >
              Features
            </AnchorLink>
          </li>
          <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
            <AnchorLink
              className="px-1 md:px-4 text-white hover:text-white flex items-center h-full"
              href="#contributors"
              offset="130"
            >
              Contributors
            </AnchorLink>
          </li>
          <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
            <AnchorLink
              className="px-1 md:px-4 text-white hover:text-white flex items-center h-full"
              href="#faq"
              offset="130"
            >
              FAQ
            </AnchorLink>
          </li>
          <li className="md:hover:bg-mineshaft-hover hover:text-white flex items-center h-full">
            <AnchorLink
              className="px-1 md:px-4 text-white hover:text-white flex items-center h-full"
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
  </>
);

export default Header;
