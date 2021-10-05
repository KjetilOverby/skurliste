import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";

const EndRingsCreate = ({
  endFillRingsCollection,
  setEndFillRingsCollection,
  endFillRings,
  setGetId,
  getId,
  setUpdate,
  update,
}) => {
  useEffect(() => {
    if (endFillRingsCollection === undefined) {
      setEndFillRingsCollection(null);
    } else if (endFillRings) {
      setEndFillRingsCollection([
        ...endFillRingsCollection,
        {
          input: endFillRings,
          id: uuidv4(),
        },
      ]);
    }
  }, [endFillRings]);
  useEffect(() => {
    if (endFillRingsCollection) {
      const remove = endFillRingsCollection.filter((item) => item.id !== getId);
      setEndFillRingsCollection(remove);
    }
  }, [getId, update]);

  //   useEffect(() => {
  //     if (endFillRingsCollection) {
  //       setStartRingSum(
  //         endFillRingsCollection.reduce(
  //           (num, { input }) => Number(num) + Number(input),
  //           0
  //         )
  //       );
  //     }
  //   }, [endFillRingsCollection]);
  return (
    <>
      <div className="container">
        <div className="start-fillrings-container">
          {endFillRingsCollection &&
            endFillRingsCollection.map((item) => {
              const getEndFillRingsIdHandler = () => {
                setGetId(item.id);

                setUpdate(Math.random());
              };
              return (
                <>
                  <RingComponent
                    key={item.id}
                    color={"linear-gradient(to top, #d9afd9 0%, #7a979b 100%)"}
                  >
                    <h4>{item.input}</h4>
                    <button onClick={getEndFillRingsIdHandler}>X</button>
                  </RingComponent>
                </>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .start-fillrings-container {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default EndRingsCreate;
