import React from 'react';
import { DailyChallenges } from './components/DailyChallenges';
import { Navbar } from './components/Navbar';
import { CarbonFootCal } from './components/CarbonFootCal'
import { ScanProduct } from './components/ScanProduct';
import SliderBlog from './components/SliderBlog';
import { RecommendedBlog } from './components/RecommendedBlog';
import { VerifiedEcoStore } from './components/VerifiedEcoStore';
import Ecohoy from './components/Ecohoy';
import BareNecessities from './components/BareNecessities';
import { ViewAllStore } from './components/ViewAllStore';
import { FromCommunity } from './components/FromCommunity';
import EcoFriendly from './components/EcoFriendly';


function App() {
  return (
    <>
      <Navbar />
      <br />
      <DailyChallenges />
      <CarbonFootCal />
      <br />
      <ScanProduct />
      <RecommendedBlog />
      <SliderBlog />
      <VerifiedEcoStore />
      <Ecohoy />
      <BareNecessities />
      <ViewAllStore />
      <FromCommunity />
      <EcoFriendly />

    </>

  );
}

export default App;
