import { useState, useEffect } from "react";
import { StrategySlider } from "./StrategySlide";
import {GreatChoice} from "./GreatChoice"
import PaymentPage1 from "../../components/PaymentPage1.jsx"
import "./SliderCss.css";
function StrategySlideParent() {
  const [page, setPage] = useState(1);
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
       if (which === "all") {
      setStrategySelection((props) => {
        let k = "";
        for (k in props) {
          props[k] = true;
        }
        return { ...strategySelection, props };
      });
    } else if (which === "save") {
      setPage(page + 1);
    } else {
      setStrategySelection({
        ...strategySelection,
        [which]: !strategySelection[which],
      });
    }
  };

  return (
    <>
        {page===1?(
            <StrategySlider
          handleStrategySelection={handleStrategySelection}
          strategySelection={strategySelection}
        ></StrategySlider>
        ):page===2?(
           <GreatChoice handelPage={handelPage} />
        ):(
          <PaymentPage1/>
        )}
        
    </>
  );
}

export default StrategySlideParent;
