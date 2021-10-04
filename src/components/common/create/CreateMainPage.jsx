import React, { useState } from "react";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./middlesection/MiddleComponent";
import RawInputList from "./RawInputList";
import RingList from "./RingList";
import TopComponent from "./TopComponent";

const CreateMainPage = () => {
  const [startFillRings, setStartFillRings] = useState();
  const [leftPanelSlide, setLeftPanelSlide] = useState("container-closed");
  return (
    <>
      <div className="container">
        <TopComponent />
        <LeftComponent setLeftPanelSlide={setLeftPanelSlide} />
        <MiddleComponent startFillRings={startFillRings} />
        <RawInputList leftPanelSlide={leftPanelSlide} />
        <RingList
          leftPanelSlide={leftPanelSlide}
          setStartFillRings={setStartFillRings}
        />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-areas:
              "left top right"
              "left middle right";
            grid-template-columns: 16rem 1fr 30rem;
            grid-template-rows: 10rem 1fr;
            min-height: 100vh;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default CreateMainPage;
