import { DailyChallenges } from './Homepage/DailyChallenges';
import { Navbar } from './Homepage/Navbar';
import { CarbonFootCal } from './Homepage/CarbonFootCal'
import { ScanProduct } from './Homepage/ScanProduct';
import SliderBlog from './Homepage/SliderBlog';
import { RecommendedBlog } from './Homepage/RecommendedBlog';
import { VerifiedEcoStore } from './Homepage/VerifiedEcoStore';
import Ecohoy from './Homepage/Ecohoy';
import BareNecessities from './Homepage/BareNecessities';
import { ViewAllStore } from './Homepage/ViewAllStore';
import { FromCommunity } from './Homepage/FromCommunity';
import EcoFriendly from './Homepage/EcoFriendly';
import YourFootprint from './YourFootprint'

function Homepage() {
  return (
    <>
      <Navbar/>
      <DailyChallenges />
      <CarbonFootCal />
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

export default Homepage;
