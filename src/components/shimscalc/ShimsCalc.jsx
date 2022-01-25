import React from "react";
import Image from "next/image";
import distansering from "../../../assets/distansering2.bmp";
import planke from "../../../assets/planke.jpeg";

const ShimsCalc = ({ setOpenPage }) => {
  return (
    <>
      <div className="container">
        <h1 className="header">Velg råmål eller ring</h1>
        <div className="img-main-container">
          <div></div>
          <div onClick={() => setOpenPage("ring")} className="img-container">
            <h4 className="img-header">Ring</h4>
            <Image src={distansering} />

            <p className="text">Legg sammen flere ringer for å få en verdi.</p>
          </div>
          <div onClick={() => setOpenPage("raw")} className="img-container">
            <h4 className="img-header">Råmål</h4>

            <Image src={planke} />
            <p className="text">
              Regn ut hvilke skims man må bruke ut i fra gitt råmål.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
          .header {
            margin-top: 5rem;
            color: grey;
          }
          .img {
            width: 100%;
          }
          .img-header {
            font-size: 2rem;
            font-weight: 100;
            color: grey;
          }
          .img-container {
            width: 15rem;
            display: grid;
            grid-template-rows: 4rem 18rem 1fr;
            place-items: center;
            padding: 1rem;
            border: 1px solid transparent;
          }
          .img-container:hover {
            border: 1px solid #dadada;
            border-radius: 10px;
            cursor: pointer;
          }
          .img-main-container {
            display: grid;
            grid-template-columns: 25rem 1fr 1fr 25rem;
            place-items: center;
            margin-top: 10rem;
            width: 100%;
          }
          .text {
            text-align: center;
            color: grey;
          }
          @media (max-width: 1400px) {
            .img-main-container {
              grid-template-columns: 10rem 1fr 1fr 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ShimsCalc;
