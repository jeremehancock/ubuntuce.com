import React from 'react';
import SplitSection from '../SplitSection';
import Href from '../Href';
import { StaticImage } from 'gatsby-plugin-image';

const DNSMinder = () => {
  return (
    <SplitSection
      primarySlot={
        <div className="flex flex-col lg:p-20">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">DNS Minder</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            If you would prefer to use{' '}
            <Href to="https://www.opendns.com/setupguide/#familyshield" className="font-medium">
              OpenDNS FamilyShield
            </Href>{' '}
            ,{' '}
            <Href
              to="https://blog.cloudflare.com/introducing-1-1-1-1-for-families/"
              className="font-medium"
            >
              1.1.1.1 for Families
            </Href>{' '}
            or,{' '}
            <Href to="https://adguard-dns.io/en/public-dns.html/" className="font-medium">
              AdGuard Family DNS
            </Href>{' '}
            we have included{' '}
            <Href to="https://github.com/jeremehancock/dnsminder#readme" className="font-medium">
              DNS Minder
            </Href>{' '}
            which makes it easy to switch.
          </p>
        </div>
      }
      secondarySlot={
        <StaticImage src="../../images/dnsminder-new.png" alt="DNS Minder" placeholder="blurred" />
      }
    />
  );
};

export default DNSMinder;
