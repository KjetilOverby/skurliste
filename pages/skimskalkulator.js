import { set } from "mongoose";
import React, { useState } from "react";
import RingCalc from "../src/components/shimscalc/RingCalc";
import ShimsCalc from "../src/components/shimscalc/ShimsCalc";
import Link from "next/link";

const skimskalkulator = () => {
  const [openPage, setOpenPage] = useState("");

  return (
    <>
      <div className="container">
        <Link href="/">
          <button className="btn">TILBAKE</button>
        </Link>
        <ShimsCalc setOpenPage={setOpenPage} />
        {openPage === "ring" && <RingCalc setOpenPage={setOpenPage} />}
      </div>
      <style jsx>
        {`
          .container {
          }
          .btn {
            margin: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default skimskalkulator;
