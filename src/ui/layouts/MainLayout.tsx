import React, { FC } from 'react';

// ui components
import Layout from 'ui/styled/Layout';
import Content from 'ui/styled/Content';
import Header from 'ui/components/Header';
import Footer from 'ui/components/Footer';


const MainLayout: FC = ({children}) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Layout>
);

export default MainLayout;
