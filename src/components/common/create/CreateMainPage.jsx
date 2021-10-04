import React, { useState } from "react";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./middlesection/MiddleComponent";
import RawInputList from "./RawInputList";
import RingList from "./RingList";
import TopComponent from "./TopComponent";

const CreateMainPage = () => {
  const [startFillRings, setStartFillRings] = useState();
  const [rawButtonValue, setRawButtonValue] = useState();
  const [leftPanelSlide, setLeftPanelSlide] = useState("container-closed");
  const [startFillringsCollection, setStartFillringsCollection] = useState("");
  const [rawRingsCollection, setRawRingsCollection] = useState("");

  return (
    <>
      <div className="container">
        <TopComponent />
        <LeftComponent setLeftPanelSlide={setLeftPanelSlide} />
        <MiddleComponent
          startFillRings={startFillRings}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
          rawButtonValue={rawButtonValue}
          rawRingsCollection={rawRingsCollection}
          setRawRingsCollection={setRawRingsCollection}
        />
        <RawInputList
          leftPanelSlide={leftPanelSlide}
          setRawButtonValue={setRawButtonValue}
        />
        <RingList
          leftPanelSlide={leftPanelSlide}
          setStartFillRings={setStartFillRings}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
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
