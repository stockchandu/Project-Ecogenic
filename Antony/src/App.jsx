import { useState, useEffect } from "react";

import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";
import { AnnualCarbonFootprintShow } from "./components/AnnualCarbonFootprintShow";
import { StrategySlider } from "./components/StrategySlide";
function App() {
  const [page, setPage] = useState(1);
  const [carbonFootprint, setCarbonFootprint] = useState(2.75);
  const [footprintData, setFootprintData] = useState({
    flying: 100,
    spending: 13,
    housing: 9,
    diet: 7,
    mobility: 2,
  });
  useEffect(() => {}, [page]);
  const handelPage = () => {
    setPage(page + 1);
  };
  const handelSkip = () => {
    setPage(page + 3);
  };

  return (
    <>
      {page === 1 ? (
        <PageOne handelPage={handelPage} handelSkip={handelSkip}></PageOne>
      ) : page === 2 ? (
        <PageTwo handelPage={handelPage} handelSkip={handelSkip} />
      ) : page === 3 ? (
        <AnnualCarbonFootprintShow
          footprintData={footprintData}
          handelPage={handelPage}
          carbonFootprint={carbonFootprint}
        ></AnnualCarbonFootprintShow>
      ) : (
        <StrategySlider carbonFootprint={carbonFootprint}></StrategySlider>
      )}
    </>
  );
}

export default App;
