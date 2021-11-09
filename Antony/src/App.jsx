import { useState, useEffect } from "react";

import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";

function App() {
  const [page, setPage] = useState(1);
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
      ) : (
        <h1>connect to Homepage</h1>
      )}
    </>
  );
}

export default App;
