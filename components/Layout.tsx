import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
 children?: ReactNode;
 title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
 <div>
  <Head>
   <title>{title}</title>
   <meta charSet="utf-8" />
   <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
    crossOrigin="anonymous"
   />
   <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
    crossOrigin="anonymous"
   ></script>
  </Head>

  {children}
 </div>
);

export default Layout;
