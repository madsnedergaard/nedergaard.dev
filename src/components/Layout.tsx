import * as React from 'react';
import Head from 'next/head';

export const Layout: React.FC<{title: string, children: any}> = ({ title, children }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Title</h1>
    menu
<main>{children}</main>
  </React.Fragment>
);


