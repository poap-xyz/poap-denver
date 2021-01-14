import React, { FC } from 'react';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import Hero from './components/Hero';


const Home: FC = () => (
  <MainLayout>
    <Hero />
  </MainLayout>
);

export default Home;
