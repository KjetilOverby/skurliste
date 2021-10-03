import React, { useState } from "react";
import ringObject from "../create/ringObject";

const RingList = ({ setStartFillRings }) => {
  return (
    <>
      <div className="container">
        <h1 className="header">Små ringer</h1>
        <div className="box-container">
          {ringObject.small.map((smallRings) => (
            <div
              className="ring-box"
              onClick={(e) => setStartFillRings(e.target.innerHTML)}
            >
              {smallRings}
            </div>
          ))}
        </div>
        <h1 className="header">Store ringer</h1>
        <div className="box-container">
          {ringObject.big.map((bigRings) => (
            <div
              className="ring-box"
              onClick={(e) => setStartFillRings(e.target.innerHTML)}
            >
              {bigRings}
            </div>
          ))}
        </div>
        <h1 className="header">Skims</h1>
        <div className="box-container">
          {ringObject.shims.map((shims) => (
            <div
              className="ring-box"
              onClick={(e) => setStartFillRings(e.target.innerHTML)}
            >
              {shims}
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .box-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(3.5rem, auto));
            grid-template-rows: repeat(auto-fill, min-content);
            grid-gap: 0.5rem;
          }
          .container {
            grid-area: right;
            padding: 1rem;
          }
          .header {
            margin: 2rem 0;
            font-weight: 100;
          }
          .ring-box {
            background-color: #314255;
            height: 3.5rem;
            width: 3.5rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: white;
            transition: 0.5s;
          }
          .ring-box:hover {
            cursor: pointer;
            background: #6b8eb6;
          }
        `}
      </style>
    </>
  );
};

export default RingList;
