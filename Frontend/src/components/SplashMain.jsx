import { useState, useEffect } from "react";
import "../App.css";
import { ScreenOne } from "../components/ScreenOne";
import { ScreenTwo } from "../components/ScreenTwo";
import { ScreenThree } from "../components/ScreenThree";
import SignupFlow1 from "./SignupFlow1"

function SplashMain() {
  const [page, setPage] = useState(1);
  useEffect(() => {}, [page]);
  const handelPage = () => {
    setPage(page + 1);
  };
  const handelSkip = () => {
    setPage(page + 4);
  };
  return (
    <>
      {page === 1 ? (
        <ScreenOne handelPage={handelPage} handelSkip={handelSkip} />
      ) : page === 2 ? (
        <ScreenTwo handelPage={handelPage} handelSkip={handelSkip} />
      ) : page === 3 ? (
        <ScreenThree handelPage={handelPage} handelSkip={handelSkip} />
      ) : (
        <SignupFlow1/>
      )}
    </>
  );
}

export default SplashMain;
