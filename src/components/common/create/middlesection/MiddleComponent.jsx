import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
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
          />

          <RawRingsCreate
            rawRingsCollection={rawRingsCollection}
            setRawRingsCollection={setRawRingsCollection}
            rawRings={rawRings}
            rawButtonValue={rawButtonValue}
          />
          <div className="blade"></div>
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
          margin: -3rem -4px;
        }
        .container {
          background-color: #f1f1f1;
          grid-area: middle;
          display: grid;
          grid-template-rows: 10rem 20rem 1fr;
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
