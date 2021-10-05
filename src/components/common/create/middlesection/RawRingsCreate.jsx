import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";

const RawRingsCreate = ({
  rawRingsingsCollection,
  rawButtonValue,
  rawRingsCollection,
  setRawRingsCollection,
  setGetId,
  getId,
  setUpdate,
  update,
}) => {
  useEffect(() => {
    if (rawRingsCollection === undefined) {
      setRawRingsCollection(null);
    } else if (rawButtonValue) {
      setRawRingsCollection([
        ...rawRingsCollection,
        {
          input: Number(rawButtonValue) + Number(1.4),
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
                  <h4>{raw.input.toFixed(1)}</h4>
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
          .main-container {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default RawRingsCreate;
