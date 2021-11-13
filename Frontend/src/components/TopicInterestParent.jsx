import { useState, useEffect } from "react";
import { TopicInterestPage1 } from "./TopicInterestPage1";
import { TopicInterestPage2 } from "./TopicInterestPage2";
import Homepage from "./Homepage"

function TopicInterestParent() {
    const [page, setPage] = useState(1);
    useEffect(() => { }, [page]);
    const handelPage = () => {
        setPage(page + 1);
    };
    const handelSkip = () => {
        setPage(page + 3);
    };


return (
        <>
            {page === 1 ? (
                <TopicInterestPage1  handelPage={handelPage} handelSkip={handelSkip}/>
            ) : page === 2 ? (
                <TopicInterestPage2 handelPage={handelPage} handelSkip={handelSkip}/>
            ) : (
                <Homepage/>
            )}
        </>
    );
}

export default TopicInterestParent;

