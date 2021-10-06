import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";

const RawRingsCreate = ({
  rawButtonValue,
  rawRingsCollection,
  setRawRingsCollection,
  setGetId,
  getId,
  setUpdate,
  update,
  setRawRingSum,
  bladeDimension,
  setBladeDimensionSum,
}) => {
  const antallPlank = rawRingsCollection.length;

  useEffect(() => {
    if (rawRingsCollection === undefined) {
      setRawRingsCollection(null);
    } else if (rawButtonValue) {
      setRawRingsCollection([
        ...rawRingsCollection,
        {
          input: Number(rawButtonValue),
          id: uuidv4(),
        },
      ]);
    }
  }, [rawButtonValue]);
  useEffect(() => {
    if (rawRingsCollection) {
      const remove = rawRingsCollection.filter((item) => item.id !== getId);
      setRawRingsCollection(remove);
    }
  }, [getId, update]);
  useEffect(() => {
    if (rawRingsCollection) {
      setRawRingSum(
        rawRingsCollection.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [rawRingsCollection]);
  console.log(rawRingsCollection);
  useEffect(() => {
    setBladeDimensionSum(
      ((antallPlank * bladeDimension.bladStamme) / 2).toFixed(2)
    );
  }, [rawRingsCollection]);
  return (
    <>
      <div className="container">
        {rawRingsCollection &&
          rawRingsCollection.map((raw) => {
            const getRawRingsIdHandler = () => {
              setGetId(raw.id);

              setUpdate(Math.random());
            };
            return (
              <div key={raw.id} className="main-container">
                <div className="blade"></div>

                <RingComponent
                  color={"linear-gradient( #b16955 0%, #f9d423 100%);"}
                >
                  <p className="input">{raw.input}</p>
                  <h4>{(raw.input + 1.4).toFixed(1)}</h4>
                  <button onClick={getRawRingsIdHandler}>X</button>
                </RingComponent>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .blade {
            height: 14rem;
            width: 2px;
            background: #4173ac;
            position: absolute;
            top: -50%;
            transform: translateY(50%);
            left: -3.5px;
          }
          .container {
            display: flex;
          }
          .input {
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: black;
          }
          .main-container {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default RawRingsCreate;
