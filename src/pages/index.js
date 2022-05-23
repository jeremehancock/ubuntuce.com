import React from 'react';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Href from '../components/Href';
import HostMinder from '../components/sections/Hostminder';
import DNSMinder from '../components/sections/DNSMinder';
import WebContentFiltering from '../components/sections/WebContentFiltering';
import BibleStudySoftware from '../components/sections/BibleStudySoftware';
import SoftwareForChurches from '../components/sections/SoftwareForChurches';
import Wallpapers from '../components/sections/Wallpapers';
import Overview from '../components/sections/Overview';
import Contributors from '../components/sections/Contributors';
import Faq from '../components/sections/Faq';
import Download from '../components/sections/Download';
import ParentalControls from '../components/sections/ParentalControls';
import TimeKpr from '../components/sections/TimeKpr';
import SoftwareCenter from "../components/sections/SoftwareCenter";

const Index = () => (
  <Layout>
    <section id="top" className="pt-5 lg:pt-20 md:mb-16">
      <div className="flex justify-center text-center">
        <h1 className="text-2xl lg:text-4xl text-gray-700 mt-5 md:-mt-5">
          Checkout our{' '}
          <Href to="https://distrowatch.com/table.php?distribution=ubuntuce">DistroWatch</Href>{' '}
          page!
        </h1>
      </div>
    </section>
    <section id="tagline" className="md:mx-10 md:mb-20">
      <Overview />
    </section>
    <div className="flex justify-center" id="features" />
    <LabelText className="mt-10 text-gray-600 text-center md:-mb-10">Features</LabelText>
    <section>
      <WebContentFiltering />
      <DNSMinder />
      <HostMinder />
      <ParentalControls />
      <TimeKpr />
      <BibleStudySoftware />
      <SoftwareForChurches />
      <SoftwareCenter />
      <Wallpapers />
    </section>
    <div className="flex justify-center mt-5 md:mt-3 mb-10" id="contributors" />
    <section className="m-2 mx-10 mb-12">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Contributors</LabelText>
        <Contributors />
      </div>
    </section>
    <div className="flex justify-center mb-10" id="faq" />
    <LabelText className="mt-10 mb-3 md:mb-5 text-gray-600 text-center">FAQ</LabelText>
    <section className="lg:mx-10 md:mb-32">
      <Faq />
    </section>
    <div className="flex justify-center mb-5 md:mb-0" id="download" />
    <section className="mx-10">
      <Download />
    </section>
  </Layout>
);

export default Index;
