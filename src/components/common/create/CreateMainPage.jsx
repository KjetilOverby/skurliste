import React, { useState, useEffect } from "react";
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
  const [startRingLabel, setStartRingLabel] = useState();
  const [startRingSum, setStartRingSum] = useState(0);
  //raw rings
  const [rawRingsCollection, setRawRingsCollection] = useState("");
  const [rawRingSum, setRawRingSum] = useState(0);
  const [bladeDimension, setBladeDimension] = useState(2.8);
  const [bladeDimensionSum, setBladeDimensionSum] = useState();
  const [bladeAndRawringSum, setBladeAndRawringSum] = useState();
  // Endrings
  const [endRingSum, setEndRingSum] = useState(0);
  const [endFillRingsCollection, setEndFillRingsCollection] = useState("");
  const [endFillRings, setEndFillRings] = useState();
  const [endRingLabel, setEndRingLabel] = useState();

  const [getId, setGetId] = useState();
  const [update, setUpdate] = useState();

  const halfBlade = bladeDimension / 2;
  const sleeveCenter = 200;
  const sleeveCenterEnd = 217.2;
  const [greenColorWhenZero, setGreenColorWhenZero] = useState("");
  const [greenColorWhenZero2, setGreenColorWhenZero2] = useState("");

  // RawRing calculations
  useEffect(() => {
    setBladeAndRawringSum(
      (Number(rawRingSum) / 2 + Number(bladeDimensionSum) + halfBlade).toFixed(
        2
      )
    );
  });
  // Startlabel calculations
  useEffect(() => {
    setStartRingLabel(
      (sleeveCenter - bladeAndRawringSum - startRingSum).toFixed(2)
    );
  });

  // Endlabel calculations
  useEffect(() => {
    setEndRingLabel(
      (sleeveCenterEnd - bladeAndRawringSum - endRingSum).toFixed(2)
    );
  });
  useEffect(() => {
    if (startRingLabel <= 0.05 && startRingLabel >= -0.05) {
      setGreenColorWhenZero("green");
    } else {
      setGreenColorWhenZero("");
    }
  });
  useEffect(() => {
    if (endRingLabel <= 0.05 && endRingLabel >= -0.05) {
      setGreenColorWhenZero2("green");
    } else {
      setGreenColorWhenZero2("");
    }
  });

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
          setRawRingSum={setRawRingSum}
          setBladeDimensionSum={setBladeDimensionSum}
          bladeDimension={bladeDimension}
          startRingLabel={startRingLabel}
          startRingSum={startRingSum}
          setStartRingSum={setStartRingSum}
          setEndRingSum={setEndRingSum}
          endRingLabel={endRingLabel}
          greenColorWhenZero={greenColorWhenZero}
          greenColorWhenZero2={greenColorWhenZero2}
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
