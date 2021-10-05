import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EndRingsCreate from "./EndRingsCreate";
import RawRingsCreate from "./RawRingsCreate";
import StartRingsCreate from "./StartRingsCreate";

const MiddleComponent = ({
  startFillRings,
  startFillringsCollection,
  rawButtonValue,
  setStartFillringsCollection,
  rawRings,
  setRawRingsCollection,
  rawRingsCollection,
  endFillRingsCollection,
  setEndFillRingsCollection,
  endFillRings,
  setEndFillRings,
  setGetId,
  getId,
  update,
  setUpdate,
}) => {
  const [startRingSum, setStartRingSum] = useState();
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">3x50-18%-4.2</h1>
        </div>

        <div className="post-container">
          <StartRingsCreate
            startFillRings={startFillRings}
            setStartRingSum={setStartRingSum}
            startFillringsCollection={startFillringsCollection}
            setStartFillringsCollection={setStartFillringsCollection}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
          />

          <RawRingsCreate
            rawRingsCollection={rawRingsCollection}
            setRawRingsCollection={setRawRingsCollection}
            rawRings={rawRings}
            rawButtonValue={rawButtonValue}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
          />
          <div className="blade"></div>
          <EndRingsCreate
            endFillRingsCollection={endFillRingsCollection}
            setEndFillRingsCollection={setEndFillRingsCollection}
            endFillRings={endFillRings}
            setEndFillRings={setEndFillRings}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
          />
        </div>
        <div className="start-ring-calculate-container">
          <p>{startRingSum}</p>
        </div>
      </div>
      <style jsx>{`
        .blade {
          height: 14rem;
          width: 2px;
          background: #4173ac;
          margin: -3rem 2px -3rem -4px;
        }
        .container {
          background-color: #ffffff;
          grid-area: middle;
          display: grid;
          grid-template-rows: 20rem 20rem 1fr;
          grid-template-areas:
            "header header"
            "post post"
            "label2 ."
            ". .";
        }
        .header-container {
          grid-area: header;
          display: grid;
          place-items: center;
        }
        .header {
          font-weight: 100;
        }
        .post-container {
          grid-area: post;
          display: flex;
          justify-content: center;
        }
        .start-ring-calculate-container {
          grid-area: label2;
        }
      `}</style>
    </>
  );
};

export default MiddleComponent;
