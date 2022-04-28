import React from 'react';
// import Button from '../components/Button';
import TeamCard from '../components/TeamCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import { StaticImage } from 'gatsby-plugin-image';
import Href from '../components/Href';
import wallpapers from '../images/wallpapers.webp';
import Netlify from '../images/netlify.svg';

const Index = () => (
  <Layout>
    <section id="top" className="pt-5 lg:pt-20 md:mb-16">
      <div className="flex justify-center text-center">
        <h1 className="text-2xl lg:text-4xl text-gray-700">
          Checkout our{' '}
          <Href to="https://distrowatch.com/table.php?distribution=ubuntuce">DistroWatch</Href>{' '}
          page!
        </h1>
      </div>
    </section>
    <section id="tagline" className="md:mx-10 md:mb-20">
      <div className="container mx-auto px-8 lg:flex mb-10 rounded-lg md:border md:border-solid md:border-gray-200 p-5 md:shadow-2xl m-5">
        <div className="text-left lg:w-1/2 lg:pr-10 mb-10">
          <h2 className="text-center text-2xl lg:text-4xl mb-12 md:mt-5">
            "freely ye have received, freely give"
          </h2>
          <p className="text-xl mt-6 font-light">
            Ubuntu Christian Edition (UbuntuCE) is a free, open source operating system geared
            towards Christians. It is based on{' '}
            <Href to="https://ubuntu.com/download/desktop" className="font-medium">
              Ubuntu 22.04 LTS
            </Href>
            .
          </p>
          <p className="text-xl mt-6 font-light">
            Ubuntu is a complete Linux-based operating system, freely available with both community
            and professional support.
          </p>
          <p className="text-xl mt-6 font-light">
            The goal of UbuntuCE is to bring the power and security of Ubuntu to Christians.
          </p>
        </div>
        <div className="lg:w-1/2 shadow-2xl">
          <StaticImage
            src="../images/bible-laptop.jpg"
            alt="Welcome To UbuntuCE"
            placeholder="blurred"
            className="bg-black min-h-full"
          />
        </div>
      </div>
    </section>
    <div className="flex justify-center" id="features" />
    <LabelText className="mt-10 text-gray-600 text-center md:-mb-10">Features</LabelText>
    <section>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="flex flex-col lg:p-20">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Web Content Filtering
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is pre-configured with{' '}
              <Href to="https://cleanbrowsing.org/" className="font-medium">
                CleanBrowsing
              </Href>
              , an industry-leading DNS provider that offers fast, secure, DNS with state-of-the art
              content filtering.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage
            src="../images/cleanbrowsing.png"
            alt="CleanBrowsing"
            placeholder="blurred"
          />
        }
      />
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
          <StaticImage src="../images/dnsminder-job.png" alt="DNS Minder" placeholder="blurred" />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="flex flex-col lg:p-20">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Host Minder</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              <Href to="https://github.com/jeremehancock/hostminder#readme" className="font-medium">
                Host Minder
              </Href>{' '}
              is a simple application built with UbuntuCE in mind. It provides an easy way to block
              unwanted websites from your system.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../images/hostminder-job.png" alt="Host Minder" placeholder="blurred" />
        }
      />
      <SplitSection
        primarySlot={
          <div className="flex flex-col lg:p-20">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Bible Study Software
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We have included the best Bible Study software available for Linux. Including:{' '}
              <Href to="https://bibletime.info/" className="font-medium">
                BibleTime
              </Href>
              ,{' '}
              <Href to="https://xiphos.org/" className="font-medium">
                Xiphos
              </Href>
              ,{' '}
              <Href to="https://bibledit.org/" className="font-medium">
                Bibledit
              </Href>
              , and more.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../images/xiphos-job.png" alt="Xiphos" placeholder="blurred" />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="flex flex-col lg:p-20">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Software for Churches
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is a great choice for Churches and includes{' '}
              <Href to="https://openlp.org/" className="font-medium">
                OpenLP
              </Href>
              ,{' '}
              <Href to="https://www.worshipextreme.com/presenter" className="font-medium">
                Presenter by WorshipTools
              </Href>
              , and{' '}
              <Href to="https://floodlight.gitlab.io/" className="font-medium">
                FloodLight Presenter
              </Href>
              .
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage
            src="../images/presenter-job.png"
            alt="Presenter by WorshipTools"
            placeholder="blurred"
          />
        }
      />
      <SplitSection
        primarySlot={
          <div className="flex flex-col lg:p-20">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Beautiful Wallpapers
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is packed with a ton of beautiful Christian themed wallpapers to help you
              make your desktop fit you.
            </p>
          </div>
        }
        secondarySlot={<img src={wallpapers} alt="UbuntuCE Wallpapers" />}
      />
    </section>
    <div className="flex justify-center mt-5 md:mt-3 mb-10" id="contributors" />
    <section className="m-2 mx-10 mb-12">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Contributors</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <TeamCard image="jeremehancock" name="Jereme Hancock" title="Creator / Developer" />
          </div>
          <div className="flex-1 px-3">
            <TeamCard image="russmacshane" name="Russ MacShane" title="QA / Developer" />
          </div>
          <div className="flex-1 px-3">
            <TeamCard image="mateogomez" name="Mateo Gomez" title="Torrent Manager" />
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center mb-10" id="faq" />
    <LabelText className="mt-10 mb-3 md:mb-5 text-gray-600 text-center">FAQ</LabelText>
    <section className="lg:mx-10 md:mb-32">
      <div className="container mx-auto rounded-lg md:border md:border-solid md:border-gray-200 p-10 md:shadow-2xl">
        <div>
          <div className="mb-3 font-bold text-xl italic">
            Is UbuntuCE officially supported by Canonical?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              No, it is not "officially" supported. Our project is not funded by Canonical. However,
              we have contacted them regarding our project and they have given us guidelines to
              follow and have thanked us for supporting the Ubuntu Community and introducing Ubuntu
              to the Christian Community.
            </div>
          </div>
          <div className="mb-3 font-bold text-xl italic">
            Is UbuntuCE a new distribution of Ubuntu or a derivative?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              Well it is really neither. UbuntuCE is based directly from the standard Ubuntu
              distribution and contains extra Christian software and is pre-configured with web
              content filtering. The graphical changes are minor and are only intended to tailor the
              project to Christians.
            </div>
          </div>
          <div className="mb-3 font-bold text-xl italic">
            Why should I use UbuntuCE if I can install the same software on Ubuntu itself?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              The concept behind the UbuntuCE is not to deviate from the Ubuntu community. It is
              intended to draw a larger Christian base to the already thriving community of Ubuntu
              users. UbuntuCE simply makes it easier for Christians who are new to Linux to see the
              power of Ubuntu combined with the added benefit of having the best available Linux
              Christian software pre-installed.
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center text-lg md:text-xl italic mt-10 md:mt-6 font-bold">
            Got additional questions? <span className="hidden md:inline md:ml-2">Join us on</span>
            <Href
              to="mailto:support@ubuntuce?subject=UbuntuCE Slack Invite Request&body=Please send me an invite to the UbuntuCE Slack."
              className="ml-2"
            >
              <div className="w-20 md:w-40">
                <StaticImage
                  src="../images/slack.png"
                  alt="Join us on Slack"
                  placeholder="blurred"
                />
              </div>
            </Href>
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center mb-5 md:mb-0" id="download" />
    <section className="mx-10">
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
        <p className="mt-10">
          Need{' '}
          <Href to="https://docs.ubuntuce.com/getting-started/introduction">help installing</Href>?
        </p>
        <p className="mt-5">
          Already running Ubuntu 22.04?{' '}
          <Href to="https://docs.ubuntuce.com/getting-started/ubuntu-ce-repository">
            Check out the UbuntuCE Repo
          </Href>
          .
        </p>
        <div className="mx-5">
          <div className="flex justify-center items-center md:justify-between mt-10 lg-mt-0 flex-col-reverse md:flex-row gap-6">
            <div className="mt-5">
              <a href="https://www.netlify.com">
                <img src={Netlify} alt="Deploys by Netlify" />
              </a>
            </div>
            <div className="flex justify-start gap-2">
              <Href to="https://sourceforge.net/projects/ubuntuce/">
                <img src="/oss-users-love-us-white.png" alt="Source Forge Our Customers Love Us" />
              </Href>

              <Href to="https://sourceforge.net/projects/ubuntuce/">
                <img src="/oss-rising-star-white.png" alt="SourceForge Rising Star" />
              </Href>
              <Href to="https://www.patreon.com/ubuntuce" className="visible lg:hidden ml-3 mt-1 md:mt-2">
                <StaticImage
                  src="../images/patreon.png"
                  alt="Become a Patron"
                  height={100}
                  placeholder="none"
                />
              </Href>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
