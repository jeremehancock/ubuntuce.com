import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
import metaImage from '../../images/bible-laptop.jpg';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Ubuntu Christian Edition -- Linux For Christians</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="ubuntu christian edition, christian edition, christian linux, linux for christians, linux software, christian programs, ubuntu forums,ubuntu linux,ubuntu,linux fourm,ubunut forum,linux ubuntu,ubuntu support,ubuntu help,ubuntu linux help"
        />
        <meta name="title" content="Ubuntu Christian Edition -- Linux For Christians" />
        <meta name="description" content="This is the project page for Ubuntu Christian Edition." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ubuntuce.com/" />
        <meta property="og:title" content="Ubuntu Christian Edition -- Linux For Christians" />
        <meta
          property="og:description"
          content="This is the project page for Ubuntu Christian Edition."
        />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ubuntuce.com/" />
        <meta property="twitter:title" content="Ubuntu Christian Edition -- Linux For Christians" />
        <meta
          property="twitter:description"
          content="This is the project page for Ubuntu Christian Edition."
        />
        <meta property="twitter:image" content={metaImage} />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
