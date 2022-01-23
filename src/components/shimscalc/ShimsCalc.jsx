import React from "react";

const ShimsCalc = ({ setOpenPage }) => {
  return (
    <>
      <div className="container">
        <h1 className="header">Velg råmål eller ring</h1>
        <div className="img-main-container">
          <div></div>
          <div onClick={() => setOpenPage("ring")} className="img-container">
            <h4 className="img-header">Ring</h4>
            <img
              className="img"
              src="https://www.swiftrivermachine.com/wp-content/uploads/2017/10/Z101021-distance-ring-50_38x25.bmp"
              alt=""
            />
            <p className="text">Legg sammen flere ringer for å få en verdi.</p>
          </div>
          <div onClick={() => setOpenPage("raw")} className="img-container">
            <h4 className="img-header">Råmål</h4>
            <img
              className="img"
              src="https://www.byggmakker.no/globalassets/nobbimages/0502---konstruksjonsvirke/5310190173426094624173.jpg?width=400&quality=80"
              alt=""
            />
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
            transition: transform 0.5s, box-shadow 0.5s;
          }
          .img-container:hover {
            transform: scale(1.1);
            box-shadow: 5px 5px 40px grey;
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
