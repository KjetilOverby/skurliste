import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import ShimsRingList from "./ShimsRingList";

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
  setRingShimsPanel,
  setStartRingsPanel,
  setEndringPanel,
  setLeftPanelSlide,
  ringShims,
}) => {
  const antallPlank = rawRingsCollection.length;
  const [rawRingId, setRawRingId] = useState();
  const [openShimsRings, setOpenShimsRings] = useState();
  const [test, setTest] = useState();

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

  useEffect(() => {
    setBladeDimensionSum(
      ((antallPlank * bladeDimension.bladStamme) / 2).toFixed(2)
    );
  }, [rawRingsCollection]);
  // Shims
  const [filteredObject, setFilteredObject] = useState();
  useEffect(() => {
    if (rawRingsCollection) {
      setFilteredObject(
        rawRingsCollection.filter((item) => item.id === rawRingId)
      );
    }
  }, [rawRingId]);

  // const ringValueHandler = () => {
  //   setFilteredObject((filteredObject[0].ring = 50));
  // };

  useEffect(() => {
    if (filteredObject) {
      setFilteredObject((filteredObject[0].ring = ringShims));
    }
  }, [ringShims]);
  console.log(filteredObject);
  return (
    <>
      <div className="container">
        {rawRingsCollection &&
          rawRingsCollection.map((raw) => {
            const getRawRingsIdHandler = () => {
              setGetId(raw.id);

              setUpdate(Math.random());
            };
            const addRingHandler = () => {
              setRingShimsPanel(true);
              setStartRingsPanel(false);
              setEndringPanel(false);
              setLeftPanelSlide("container-closed");
              setRawRingId(raw.id);
            };
            return (
              <div key={raw.id} className="main-container">
                {/* <div className="blade"></div> */}
                {/* <ShimsRingList setTest={setTest} /> */}
                <RingComponent
                  color={"linear-gradient( #aac3ad 0%, #23f9c3 100%);"}
                >
                  <p className="input">{raw.input}</p>
                  <h4 className="ring-value">{(raw.input + 1.4).toFixed(1)}</h4>
                  <MdAddCircle
                    style={{
                      color: "#29904b",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={addRingHandler}
                  />
                  <p className="ring">{raw.ring}</p>
                  <p className="shims">
                    {raw.ring && (raw.input + 1.4 - raw.ring).toFixed(1)}
                  </p>
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={getRawRingsIdHandler}
                  />
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
          .ring-value {
            font-weight: 100;
            color: black;
          }
          .ring {
            position: absolute;
            color: black;
            top: 8rem;
          }
          .shims {
            position: absolute;
            color: black;
            top: 9rem;
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
