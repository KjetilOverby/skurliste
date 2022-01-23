import React, { useState, useEffect } from "react";
import RingTable from "./ringTable";
import ringObject from "../common/create/ringObject";

const RingCalc = ({ setOpenPage }) => {
  const [inputValue, setInputValue] = useState(0);
  const [ringValue, setRingValue] = useState(0);
  const [ringValue2, setRingValue2] = useState(0);
  const [ringValue3, setRingValue3] = useState(0);

  const [firstCalc, setFirstCalc] = useState(0);
  const [secondCalc, setSecondCalc] = useState(0);
  const [thirdCalc, setThirdCalc] = useState();

  const [ringCount, setRingCount] = useState(0);

  const [updateFirst, setUpdateFirst] = useState(false);
  const [updateSecond, setUpdateSecond] = useState(false);
  const [updateThird, setUpdateThird] = useState(false);

  const [ringExist, setRingExist] = useState();
  const [ringExistSmall, setRingExistSmall] = useState();
  const [ringExistShims, setRingExistShims] = useState();

  const getRings = (e) => {
    setRingValue(e.target.innerHTML);
    setUpdateFirst(!updateFirst);
  };
  const getRings2 = (e) => {
    setRingValue2(e.target.innerHTML);
    setFirstCalc(inputValue - ringValue);
    setUpdateSecond(!updateSecond);
  };
  const getRings3 = (e) => {
    setRingValue3(e.target.innerHTML);
    setFirstCalc(inputValue - ringValue - ringValue2);
    setUpdateThird(!updateThird);
  };
  useEffect(() => {
    setFirstCalc(Number(inputValue - ringValue).toFixed(1));
  }, [updateFirst]);
  useEffect(() => {
    setFirstCalc(Number(firstCalc - ringValue2).toFixed(1));
    setSecondCalc(ringValue2);
  }, [updateSecond]);
  useEffect(() => {
    setFirstCalc(Number(firstCalc - ringValue3).toFixed(1));
  }, [updateThird]);

  useEffect(() => {
    setRingExist(ringObject.big.filter((item) => item == firstCalc));
  }, [updateFirst, updateSecond, updateThird, firstCalc]);
  useEffect(() => {
    setRingExistSmall(ringObject.small.filter((item) => item == firstCalc));
  }, [updateFirst, updateSecond, updateThird, firstCalc]);
  useEffect(() => {
    setRingExistShims(ringObject.shims.filter((item) => item == firstCalc));
  }, [updateFirst, updateSecond, updateThird, firstCalc]);

  console.log(ringExist && ringExist.length);

  return (
    <>
      <div className="container">
        <div className="left-panel">
          <button onClick={() => setOpenPage("")}>Tilbake</button>
          <div>
            <div>
              <p>Skriv inn en verdi</p>
              <input
                type="number"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => setRingCount(ringCount + 1)}>
                Neste ring
              </button>
            </div>

            <div className="ring-table-container">
              {ringCount === 0 && (
                <RingTable getRings={getRings} color="#5ea19a" />
              )}
              {ringCount === 1 && (
                <RingTable getRings={getRings2} color="#6f95b4f8" />
              )}
              {ringCount === 2 && (
                <RingTable getRings={getRings3} color="#b46f6ff8" />
              )}
            </div>
          </div>
        </div>
        <div className="middle-panel">
          <h1 className="input-val">{inputValue}</h1>
          <hr />
          {ringValue !== 0 && (
            <div className="ring-calc-container">
              <h1 className="ring-val">{ringValue}</h1>
              <img
                className="img"
                src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101021-distance-ring-50_38x25.bmp"
                alt=""
              />
            </div>
          )}

          {secondCalc !== 0 && (
            <div className="ring-calc-container">
              <h1 className="ring-val">{secondCalc}</h1>
              <img
                className="img"
                src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101021-distance-ring-50_38x25.bmp"
                alt=""
              />
            </div>
          )}

          {ringValue3 !== 0 && (
            <div className="ring-calc-container">
              <h1 className="ring-val">{ringValue3}</h1>
              <img
                className="img"
                src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101021-distance-ring-50_38x25.bmp"
                alt=""
              />
            </div>
          )}

          {firstCalc !== 0 && (
            <div className="ring-calc-container">
              <h1 className="ring-val">{firstCalc}</h1>
              {ringExist && ringExist.length == 1 && (
                <img
                  className="img"
                  src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101021-distance-ring-50_38x25.bmp"
                  alt=""
                />
              )}
              {ringExistSmall && ringExistSmall.length == 1 && (
                <img
                  className="img-small"
                  src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101022-distance-ring-50_40x15.bmp"
                  alt=""
                />
              )}
              {ringExistShims && ringExistShims.length == 1 && (
                <img
                  className="img"
                  src="https://dy5bctajj6i3s.cloudfront.net/300x300/din_988_passscheiben.jpg"
                  alt=""
                />
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: fixed;
            top: 0;
            left: 0;
            background-color: #ffffff;
            height: 100vh;
            width: 100vw;
            animation: slide 0.5s;
            padding: 2rem;
            display: grid;
            grid-template-areas:
              "left middle ."
              "left middle .";
          }
          .number-container {
            display: flex;
          }
          .left-panel {
            grid-area: left;
          }
          .middle-panel {
            grid-area: middle;
            margin-top: 10rem;
          }
          .img {
            height: 100%;
          }
          .img-small {
            height: 70%;
          }
          .input-val {
            color: #c96557;
            font-size: 3rem;
            font-weight: 300;
          }
          .ring-val {
            font-size: 3rem;
            color: #507eac;
            font-weight: 300;
          }
          .ring-calc-container {
            display: flex;
            height: 3rem;
            align-items: center;
            width: 12rem;
            justify-content: space-between;
          }

          @keyframes slide {
            0% {
              transform: translateX(-100vw);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default RingCalc;
