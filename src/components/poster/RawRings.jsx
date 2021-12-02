import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";

const RawRings = ({ rawValue, bladstamme, ring, shims2, shims3, shims1 }) => {
  const ringVal = Number(rawValue + 1.4);
  return (
    <>
      <div className="container">
        <div className="rawValue">{rawValue}</div>
        <div className="rawRing">{ringVal.toFixed(1)}</div>
        <p className="ring">{ring}</p>
        {ring && (
          <>
            <p className="ring">{ring}</p>

            <p className="shims1">
              {Number(
                ringVal - ring - Number(shims2 != undefined && shims2)
              ).toFixed(1)}
            </p>
            <p className="shims2">{shims2}</p>
            <p className="shims3">{shims3 && (shims2 - shims3).toFixed(1)}</p>
            <p className="shims4">{shims3 != undefined && shims3}</p>
          </>
        )}
        <div className="blade">
          <p>{}</p>
          <AiTwotoneFilter
            style={{
              position: "absolute",
              top: -5,
              color: "#cacaca",
              left: "-6px",
            }}
          />
          <AiTwotoneFilter
            style={{
              position: "absolute",
              bottom: -5,
              color: "#cacaca",
              transform: "rotate(180deg)",
              left: "-6px",
            }}
          />
          <p className="sagsnitt">{(bladstamme + 1.4).toFixed(1)}</p>
          <p className="bladstamme">{bladstamme}</p>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            position: relative;
            display: flex;
            align-items: center;
          }
          .blade {
            height: 36rem;
            width: 4px;
            background-color: #cacaca;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            box-shadow: 5px 10px 10px #1a1a1a97;
            left: -2px;
            z-index: 100;
          }
          .bladstamme {
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
          }
          .sagsnitt {
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
          }
          .ring {
            color: #ffffff;
            position: absolute;
            top: 14.5rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .shims1 {
            color: #ffffff;
            position: absolute;
            top: 16rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .shims2 {
            color: #ffffff;
            position: absolute;
            top: 17.5rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .shims3 {
            color: #ffffff;
            position: absolute;
            top: 19rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .rawRing {
            height: 14rem;
            width: 5.5rem;
            background: linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.7)
              ),
              url("https://images.unsplash.com/photo-1533899114961-3aa0579cd5b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&q=80");
            margin: 0 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            z-index: 100;
            border-radius: 5px;
            font-size: 1.8rem;
            font-weight: 600;

            border: 1px solid #cacaca;
            background-size: cover;
            background-position: center;
          }
          .rawValue {
            position: absolute;
            top: -2rem;
            left: 50%;
            transform: translateX(-50%);
            color: #c2c2c2;
          }
          @media (max-width: 1500px) {
            .rawRing {
              height: 12rem;
              width: 4.8rem;
              font-size: 1.4rem;
            }
            .blade {
              height: 30rem;
            }
            .ring {
              top: 12.5rem;
            }
            .shims1 {
              top: 14rem;
            }
          }
          @media (max-width: 1350px) {
            .rawRing {
              height: 9rem;
              width: 4rem;
              font-size: 1.2rem;
            }
            .blade {
              height: 25rem;
            }
          }
          @media (max-width: 1000px) {
            .rawRing {
              height: 7rem;
              width: 3rem;
              font-size: 0.9rem;
            }
            .blade {
              height: 18rem;
              width: 3px;
            }
          }
        `}
      </style>
    </>
  );
};

export default RawRings;
