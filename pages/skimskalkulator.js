import React from "react";
import ShimsCalc from "../src/components/shimscalc/ShimsCalc";

const skimskalkulator = () => {
  return (
    <>
      <div className="container">
        <ShimsCalc />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default skimskalkulator;
