import { useState, useEffect } from "react";

import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";
import { AnnualCarbonFootprintShow } from "./components/AnnualCarbonFootprintShow";
import { StrategySlider } from "./components/StrategySlide";
import { GreatChoice } from "./components/GreatChoice";
function App() {
  const [page, setPage] = useState(4);
  const [carbonFootprint, setCarbonFootprint] = useState(2.75);
  const [footprintData, setFootprintData] = useState({
    flying: 100,
    spending: 13,
    housing: 9,
    diet: 7,
    mobility: 2,
  });
  const [strategySelection, setStrategySelection] = useState({
    mobility: false,
    shelter: false,
    food: false,
  });
  useEffect(() => {}, [page]);
  const handelPage = () => {
    setPage(page + 1);
  };
  const handelSkip = () => {
    setPage(page + 3);
  };

  const handleStrategySelection = (which) => {
    // console.log(which, "which...........");

    if (which == "all") {
      setStrategySelection((props) => {
        console.log(props, "props........");
        let k = "";
        for (k in props) {
          //console.log(props[k], "key item........");
          props[k] = true;
        }
        // console.log(props, "props........");
        return { ...strategySelection, props };
      });
    } else if (which == "save") {
      setPage(page + 1);
    } else {
      setStrategySelection({
        ...strategySelection,
        [which]: !strategySelection[which],
      });
    }
    //console.log(strategySelection);
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
      ) : page === 4 ? (
        <StrategySlider
          handleStrategySelection={handleStrategySelection}
          strategySelection={strategySelection}
          carbonFootprint={carbonFootprint}
        ></StrategySlider>
      ) : page === 5 ? (
        <GreatChoice handelPage={handelPage}></GreatChoice>
      ) : (
        <h1>next page</h1>
      )}
    </>
  );
}

export default App;
