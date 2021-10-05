import React, { useState } from "react";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./middlesection/MiddleComponent";
import RingListEnd from "./middlesection/RingListEnd";
import RawInputList from "./RawInputList";
import RingList from "./RingList";
import TopComponent from "./TopComponent";

const CreateMainPage = () => {
  const [startFillRings, setStartFillRings] = useState();
  const [rawButtonValue, setRawButtonValue] = useState();
  const [leftPanelSlide, setLeftPanelSlide] = useState("container-closed");
  const [endringPanel, setEndringPanel] = useState("container-closed");
  const [startFillringsCollection, setStartFillringsCollection] = useState("");
  const [rawRingsCollection, setRawRingsCollection] = useState("");
  const [endFillRingsCollection, setEndFillRingsCollection] = useState("");
  const [endFillRings, setEndFillRings] = useState();

  const [getId, setGetId] = useState();
  const [update, setUpdate] = useState();

  return (
    <>
      <div className="container">
        <TopComponent />
        <LeftComponent
          setLeftPanelSlide={setLeftPanelSlide}
          setEndringPanel={setEndringPanel}
        />
        <MiddleComponent
          startFillRings={startFillRings}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
          rawButtonValue={rawButtonValue}
          rawRingsCollection={rawRingsCollection}
          setRawRingsCollection={setRawRingsCollection}
          endFillRings={endFillRings}
          setEndFillRings={setEndFillRings}
          endFillRingsCollection={endFillRingsCollection}
          setEndFillRingsCollection={setEndFillRingsCollection}
          getId={getId}
          setGetId={setGetId}
          update={update}
          setUpdate={setUpdate}
        />
        <RawInputList
          leftPanelSlide={leftPanelSlide}
          setRawButtonValue={setRawButtonValue}
        />
        <RingList
          leftPanelSlide={leftPanelSlide}
          setStartFillRings={setStartFillRings}
          startFillRings={startFillRings}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
        />
        <RingListEnd
          setEndFillRings={setEndFillRings}
          endringPanel={endringPanel}
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
