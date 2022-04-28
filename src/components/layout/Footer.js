import React from 'react';
import Href from '../Href';

const Footer = () => (
  <footer className="mx-auto py-4 px-3 text-white bg-mineshaft-hover">
    <div className="flex -mx-3 justify-center text-center">
      <div className="flex-1 px-3">
        <div className="flex flex-wrap justify-around text-center">
          <div className="mb-3 md:mb-0">
            All Rights Reserved. 2004-2022 -{' '}
            <Href
              to="https://docs.ubuntuce.com/ubuntu-ce-information/license"
              className="text-white hover:text-slate-200"
            >
              License
            </Href>{' '}
            -{' '}
            <Href
              to="https://docs.ubuntuce.com/ubuntu-ce-information/code-of-conduct"
              className="text-white hover:text-slate-200"
            >
              Code of Conduct
            </Href>
          </div>
          <div className="text-white">
            Ubuntu and Canonical are registered trademarks of Canonical Ltd.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
