import { set } from "mongoose";
import React, { useState } from "react";
import ringObject from "../create/ringObject";

const RingList = ({ setStartFillRings, startFillRings }) => {
  const getRings = (e) => {
    setStartFillRings(e.target.innerHTML);
    setTimeout(() => {
      setStartFillRings("");
    }, 100);
  };
  return (
    <>
      <div className="container">
        <h1 className="header">Små ringer</h1>
        <div className="box-container">
          {ringObject.small.map((smallRings) => (
            <div key={smallRings} className="ring-box" onClick={getRings}>
              {smallRings}
            </div>
          ))}
        </div>
        <h1 className="header">Store ringer</h1>
        <div className="box-container">
          {ringObject.big.map((bigRings) => (
            <div key={bigRings} className="ring-box" onClick={getRings}>
              {bigRings}
            </div>
          ))}
        </div>
        <h1 className="header">Skims</h1>
        <div className="box-container">
          {ringObject.shims.map((shims) => (
            <div key={shims} className="ring-box" onClick={getRings}>
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
            background-color: #3e505c;
            height: 3.5rem;
            width: 3.5rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: white;
            transition: 0.5s;
            box-shadow: 10px 10px 20px #858585fa;
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
