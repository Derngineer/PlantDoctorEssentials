import { Fragment, useEffect, useState } from "react";

type TimeCounterProps = {
  isCounting: boolean;
};

const TimeCounter = ({ isCounting }: TimeCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Increment the count
      }, 1000);
    } else if (intervalId !== null) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isCounting]);

  return (
    <Fragment>
<div className="mt-5 d-flex justify-content-center" style={{ background: "black", color: "white", width: "50%" }}>
  <div className="m-2 p-3 " style={{ border: "1px solid white", boxSizing: "border-box", width: "100%" }}>
    <p>The Doc prepares your prescription in:</p>
    <h2>{count} MS</h2>
  </div>
</div>

     
    </Fragment>
  );
};

export default TimeCounter;

