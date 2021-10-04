import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";

const StartRingsCreate = ({
  startFillRings,
  setStartRingSum,
  startFillringsCollection,
  setStartFillringsCollection,
}) => {
  const [getId, setGetId] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    if (startFillringsCollection === undefined) {
      setStartFillringsCollection(null);
    } else if (startFillRings) {
      setStartFillringsCollection([
        ...startFillringsCollection,
        {
          input: startFillRings,
          id: uuidv4(),
        },
      ]);
    }
  }, [startFillRings]);
  useEffect(() => {
    if (startFillringsCollection) {
      const remove = startFillringsCollection.filter(
        (item) => item.id !== getId
      );
      setStartFillringsCollection(remove);
    }
  }, [getId, update]);

  useEffect(() => {
    if (startFillringsCollection) {
      setStartRingSum(
        startFillringsCollection.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [startFillringsCollection]);
  return (
    <>
      <div className="container">
        <div className="start-fillrings-container">
          {startFillringsCollection &&
            startFillringsCollection.map((item) => {
              const getStartFillRingsIdHandler = () => {
                setGetId(item.id);

                setUpdate(Math.random());
              };
              return (
                <>
                  <RingComponent
                    key={item.id}
                    color={"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}
                  >
                    <h4>{item.input}</h4>
                    <button onClick={getStartFillRingsIdHandler}>X</button>
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

export default StartRingsCreate;
