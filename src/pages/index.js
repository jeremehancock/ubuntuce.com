import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Index = () => (
  <Layout>
    <section id="top" className="pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2 mr-4">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-tight italic">
            "freely ye have received, freely give"
          </h1>
          <p className="text-xl mt-6 font-light">
            Ubuntu Christian Edition (UbuntuCE) is a free, open source operating system geared
            towards Christians. It is based on the popular Ubuntu Linux.
          </p>
          <p className="text-xl mt-6 font-light">
            Ubuntu is a complete Linux-based operating system, freely available with both community
            and professional support.
          </p>
          <p className="text-xl mt-6 font-light">
            The goal of UbuntuCE is to bring the power and security of Ubuntu to Christians.
          </p>
          <p className="text-xl mt-6 font-light">
            Along with the standard Ubuntu applications, UbuntuCE includes additional software such
            as BibleTime, Xiphos, OpenLP, Host Minder, and more.
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink href="#download" className="text-white hover:text-white">
              <Button size="lg">Download Now</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:w-1/2 -z-1">
          <StaticImage
            src="../images/welcome.png"
            alt="Welcome To UbuntuCE"
            placeholder="blurred"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
    <section id="features" className="pt-32 md:pt-64">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="screenshots"
      primarySlot={
        <div className="pt-32 md:pt-64">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="contributors" className="pt-32 md:pt-64">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">The UbuntuCE Team</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="faq" className="pt-32 md:pt-56">
      <div className="container mx-auto">
        <div className="mx-5">
          {' '}
          <p>
            <div className="text-4xl">FAQ</div>
            <hr className="mb-3" />
          </p>
          <p className="mb-3 font-bold">
            <i>Is Ubuntu Christian Edition officially supported by Canonical?</i>
          </p>
          <p className="mb-3">
            <blockquote className="pl-3">
              No, it is not "officially" supported. Our project is not funded by Canonical. However,
              we have contacted them regarding our project and they have given us guidelines to
              follow and have thanked us for supporting the Ubuntu Community and introducing Ubuntu
              to the Christian Community.
            </blockquote>
          </p>
          <p className="mb-3 font-bold">
            <i>Is Ubuntu Christian Edition a new distribution of Ubuntu or a derivative?</i>
          </p>
          <p className="mb-3">
            <blockquote className="pl-3">
              Well it is really neither. Ubuntu Christian Edition is based directly from the
              standard Ubuntu distribution and contains extra Christian software as well as a few
              additional tools to make the transition to Ubuntu easier for a Linux newcomer. The
              graphical changes are minor and are only intended to tailor the project to Christians.
            </blockquote>
          </p>
          <p className="mb-3 font-bold">
            <i>
              Why should I use the Ubuntu Christian Edition if I can install the same software to
              the default Ubuntu?
            </i>
          </p>
          <p className="mb-3">
            <blockquote className="pl-3">
              The concept behind the Ubuntu Christian Edition is not to deviate from the Ubuntu
              community. It is intended to draw a larger Christian base to the already thriving
              community of Ubuntu users. The Ubuntu Christian Edition simply makes it easier for
              Christians who are new to Linux to see the power of Ubuntu combined with the added
              benefit of having the best available Linux Christian software pre-installed.
            </blockquote>
          </p>
          <p className="mb-3 font-bold">
            <i>Is Ubuntu Christian Edition designed for Protestants or Catholics?</i>
          </p>
          <p className="mb-3">
            <blockquote className="pl-3">
              Both! Ubuntu Christian Edition will always try to cater to the needs of all
              Christians. Ubuntu CE is also a great choice for anyone wanting a family friendly
              operating system complete with web content filtering.
            </blockquote>
          </p>
        </div>
      </div>
    </section>
    <section className="pt-32" id="download">
      <div className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8">
          <Button size="xl">Get Started Now</Button>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
