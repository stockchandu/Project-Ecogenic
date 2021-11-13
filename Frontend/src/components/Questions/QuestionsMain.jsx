import { QuestionOne } from "./QuestionOne";
import { QuestionTwo } from "./QuestionTwo";
import { QuestionThree } from "./QuestionThree";
import { QuestionFore } from "./QuestionFore";
import { useState } from "react";
import { QuestionFive } from "./QuestionFive";
import { QuestionSix } from "./QuestionSix";
import { QuestionSeven } from "./QuestionSeven";
import { QuestionEight } from "./QuestionEight";
import { AnnualCarbonFootprintShow } from "./AnnualCarbonFootprintShow";
import StrategySlideParent from "../PriceStrategy/StrategySlideParent";

const QuestionsMain = () => {
  const [page, setPage] = useState(1);
  let [co2, setCo2] = useState(0.00);
  const [fsdhm, setfsdhm] = useState([]);

  const handelPage = (val) => {
    let v = val / 8;
    console.log(v);
    setfsdhm([...fsdhm, v]);
    
    setPage(page + 1);
    setCo2(co2 + v);
  };
  const handelReset = () => {
    setPage(1);
  };

  // const [carbonFootprint, setCarbonFootprint] = useState(totalCo2);
  const [footprintData, setFootprintData] = useState({
    flying: 100,
    spending: 13,
    housing: 9,
    diet: 7,
    mobility: 2,
  });
  return (
    <>
      {page === 1 ? (
        <QuestionOne handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page === 2 ? (
        <QuestionTwo handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page === 3 ? (
        <QuestionThree handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page === 4 ? (
        <QuestionFore handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page === 5 ? (
        <QuestionFive handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page == 6 ? (
        <QuestionSix handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page == 7 ? (
        <QuestionSeven handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page == 8 ? (
        <QuestionEight handelPage={handelPage} co2={co2.toFixed(2)} />
      ) : page == 9 ? (
        <AnnualCarbonFootprintShow
          footprintData={footprintData}
          handelPage={handelPage}
          carbonFootprint={co2}
          valueArr={fsdhm}
          handelReset={handelReset}
        />
      ) : (
      <StrategySlideParent/>
      )}
    </>
  );
};

export default QuestionsMain