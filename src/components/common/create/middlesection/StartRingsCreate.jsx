import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const StartRingsCreate = ({ startFillRings }) => {
  const [startFillringsCollection, setStartFillringsCollection] = useState("");
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
  console.log(startFillringsCollection);
  useEffect(() => {
    if (startFillringsCollection) {
      const remove = startFillringsCollection.filter(
        (item) => item.id !== getId
      );
      setStartFillringsCollection(remove);
    }
  }, [getId, update]);
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
                  <div key={item.id} className="ring">
                    <h4>{item.input}</h4>
                    <button onClick={getStartFillRingsIdHandler}>X</button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .ring {
            height: 6rem;
            width: 3rem;
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            border-radius: 5px;
            display: grid;
            place-items: center;
            margin-bottom: 1rem;
            border: 1px solid #8d8d8d;
            font-size: 0.8rem;
            font-weight: 300;
            margin-right: 0.1rem;
            transition: 0.5s;
            color: #426d7e;
          }
          .start-fillrings-container {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default StartRingsCreate;
