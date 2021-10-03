import React, { useState } from "react";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import RingList from "./RingList";
import TopComponent from "./TopComponent";

const CreateMainPage = () => {
  const [startFillRings, setStartFillRings] = useState();
  return (
    <>
      <div className="container">
        <TopComponent />
        <LeftComponent />
        <MiddleComponent startFillRings={startFillRings} />
        <RingList setStartFillRings={setStartFillRings} />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-areas:
              "left top right"
              "left middle right";
            grid-template-columns: 20rem 1fr 30rem;
            grid-template-rows: 10rem 1fr;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default CreateMainPage;
