import { set } from "mongoose";
import React, { useState } from "react";
import RingCalc from "../src/components/shimscalc/RingCalc";
import ShimsCalc from "../src/components/shimscalc/ShimsCalc";

const skimskalkulator = () => {
  const [openPage, setOpenPage] = useState("");

  return (
    <>
      <div className="container">
        <ShimsCalc setOpenPage={setOpenPage} />
        {openPage === "ring" && <RingCalc setOpenPage={setOpenPage} />}
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
