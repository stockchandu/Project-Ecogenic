import { useState, useEffect } from "react";
import "../App.css";
import { ScreenOne } from "../components/ScreenOne";
import { ScreenTwo } from "../components/ScreenTwo";
import { ScreenThree } from "../components/ScreenThree";

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
        <h1>Sign Up Page</h1>
      )}
      {/* <ScreenOne/> */}
      {/* <ScreenTwo /> */}
      {/* <ScreenThree /> */}
    </>
  );
}

export default SplashMain;
