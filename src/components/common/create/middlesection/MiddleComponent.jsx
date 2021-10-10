import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EndRingsCreate from "./EndRingsCreate";
import LabelHeaderCalc from "./LabelHeaderCalc";
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
  setRawRingSum,
  bladeDimension,
  setBladeDimensionSum,
  startRingLabel,
  setStartRingSum,
  setEndRingSum,
  endRingLabel,
  greenColorWhenZero,
  greenColorWhenZero2,
  prosentValg,
  plankeTykkelse,
  SpesiellePlankeTykkelser,
  setHeaderString,
  reversStartRingsCollection,
  setRingShimsPanel,
  setStartRingsPanel,
  setEndringPanel,
  setLeftPanelSlide,
  ringShims,
  setRingShimsPanel2,
  setRingShims,
  ringShims2,
}) => {
  useEffect(() => {
    setHeaderString(
      `${rawRingsCollection.length}x${plankeTykkelse}${prosentValg}${(
        Number(bladeDimension.bladStamme) + 1.4
      ).toFixed(1)}${
        SpesiellePlankeTykkelser === undefined ? "" : SpesiellePlankeTykkelser
      }`
    );
  }, [
    prosentValg,
    plankeTykkelse,
    SpesiellePlankeTykkelser,
    bladeDimension,
    rawRingsCollection,
  ]);
  console.log(startRingLabel);
  return (
    <>
      <div className="container">
        <div className="header-container">
          {rawRingsCollection.length > 0 && (
            <h1 className="header">
              {rawRingsCollection.length}x{plankeTykkelse}
              {prosentValg}
              <span>
                {bladeDimension.bladStamme &&
                  (Number(bladeDimension.bladStamme) + 1.4).toFixed(1)}
              </span>
              {SpesiellePlankeTykkelser}
            </h1>
          )}
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
            setRawRingSum={setRawRingSum}
            bladeDimension={bladeDimension}
            setBladeDimensionSum={setBladeDimensionSum}
            setRingShimsPanel={setRingShimsPanel}
            setEndringPanel={setEndringPanel}
            setStartRingsPanel={setStartRingsPanel}
            setLeftPanelSlide={setLeftPanelSlide}
            ringShims={ringShims}
            setRingShimsPanel2={setRingShimsPanel2}
            setRingShims={setRingShims}
            ringShims2={ringShims2}
          />
          {/* <div className="blade"></div> */}
          <EndRingsCreate
            endFillRingsCollection={endFillRingsCollection}
            setEndFillRingsCollection={setEndFillRingsCollection}
            endFillRings={endFillRings}
            setEndFillRings={setEndFillRings}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
            setEndRingSum={setEndRingSum}
            reversStartRingsCollection={reversStartRingsCollection}
          />
        </div>
        {startRingLabel < 200 ? (
          <>
            <div className={`label-container-left ${greenColorWhenZero}`}>
              <h3>{startRingLabel}</h3>
              {/* <p>{startRingSum}</p>
          <LabelHeaderCalc rawRingsCollection={rawRingsCollection} /> */}
            </div>
            <div className={`label-container-right ${greenColorWhenZero2}`}>
              <h3>{endRingLabel}</h3>
            </div>
          </>
        ) : (
          <div className="no-input-container">
            <p
              style={{
                color: "#616161",
                fontWeight: "100",
                marginLeft: "2rem",
              }}
            >
              Start med å velge sagbladtykkelse.
            </p>

            <img
              className="img"
              src="https://c8.alamy.com/zooms/9/f69edd8580574e05865a8287aa72cbf6/ja8ckb.jpg"
              alt=""
            />
          </div>
        )}
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
          grid-template-rows: 10rem 15rem 1fr 10rem;
          grid-template-areas:
            "header header"
            "post post"
            "label1 label2"
            ". .";
        }
        .header-container {
          grid-area: header;
          display: grid;
          place-items: center;
        }
        .header {
          font-weight: 100;
          width: 100%;
          text-align: center;
        }
        .post-container {
          grid-area: post;
          display: flex;
          justify-content: center;
        }
        .no-input-container {
          grid-area: post;
          display: flex;
          justify-content: center;
          width: ;
        }
        .img {
          height: 15rem;
          margin-left: 2rem;
        }
        .label-container-right {
          grid-area: label2;
          display: flex;
          justify-content: center;
          color: red;
        }
        .label-container-left {
          grid-area: label1;
          display: flex;
          justify-content: center;
          color: red;
        }
        .green {
          color: #479947;
        }
        span {
          color: #d35a22;
        }
      `}</style>
    </>
  );
};

export default MiddleComponent;
