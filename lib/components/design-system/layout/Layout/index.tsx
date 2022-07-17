import { FC } from 'react';
import Head from 'next/head';
import { Footer } from '../Footer';
import { Header } from '../Header';
import {
  Container,
  MainContent,
} from './styled';

export const siteTitle: string =
  'Diego Gallovich';

export const Layout: FC = ({ children }) => {
  return (
    <Container>
      {/*//! modify page metadata */}
      <Head>
        <link
          rel='icon'
          href='/icons/favicon.ico'
        />
        <link
          rel='manifest'
          href='/manifest.json'
        />
        <link
          rel='apple-touch-icon'
          href='/icons/logo-96x96.png'
        />
        <meta
          name='apple-mobile-web-app-status-bar'
          content='#ffffff'
        />
        <meta
          name='theme-color'
          content='#DC5835'
        />
        <meta
          name='description'
          content='Solution oriented technology enthusiast and software developer who believes in digital business, digital economy and digital security.'
        />
       

        
<meta
          name='og:title'
          content={siteTitle}
        />
        <meta
          property='og:description'
          content='Solution oriented technology enthusiast and software developer who believes in digital business, digital economy and digital security.'
        />
        <meta
          property='og:type'
          content='website'
        />
        {/*
          // Todo: Make meta tag og:locale respond dynamically
        */}
        <meta
          property='og:locale'
          content='es-us'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <title>Diego Gallovich</title>
      </Head>
      <Header />
      <MainContent role='main'>
        {children}
      </MainContent>
      <Footer />
    </Container>
  );
};
