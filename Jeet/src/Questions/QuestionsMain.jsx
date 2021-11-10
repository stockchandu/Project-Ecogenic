import { QuestionOne } from "./QuestionOne";
import { QuestionTwo } from "./QuestionTwo";
import { QuestionThree } from "./QuestionThree";
import { QuestionFore } from "./QuestionFore";

import { useState } from "react";
import { QuestionFive } from "./QuestionFive";
import { QuestionSix } from "./QuestionSix";
import { QuestionSeven } from "./QuestionSeven";
import { QuestionEight } from "./QuestionEight";

export const QuestionsMain = () => {
  const [page, setPage] = useState(1);
  let [co2, setCo2] = useState(1.75);

  const handelPage = (val) => {
    let v = val / 4;
    console.log(v);

    setPage(page + 1);
    setCo2(co2 + v);
  };
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
      ) : (
        co2.toFixed(2)
      )}
      {/*  */}
      {/* <QuestionTwo /> */}
      {/* <QuestionThree /> */}
      {/* <QuestionFore /> */}
    </>
  );
};
