import React from 'react';

const Footer = () => (
  <footer className="mx-auto py-4 px-3 text-white bg-mineshaft-hover">
    <div className="flex -mx-3 justify-center text-center">
      <div className="flex-1 px-3">
        <div className="flex flex-wrap justify-around text-center">
          <div className="mb-3 md:mb-0">All Rights Reserved. 2004-2022 </div>
          <div><a href="https://www.netlify.com">
            <img src="https://www.netlify.com/v3/img/build/Q4C-Z6lM6G-114.svg" alt="Deploys by Netlify" />
          </a></div>
          <div className="text-white">
            Ubuntu and Canonical are registered trademarks of Canonical Ltd.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
