import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import StartRingsCreate from "./StartRingsCreate";

const MiddleComponent = ({ startFillRings }) => {
  return (
    <>
      <div className="container">
        <StartRingsCreate startFillRings={startFillRings} />
      </div>
      <style jsx>{`
        .container {
          background-color: #ebebeb;
          grid-area: middle;
          padding: 10rem;
        }
      `}</style>
    </>
  );
};

export default MiddleComponent;
