import React, { useState, useEffect } from "react";

const MiddleComponent = ({ startFillRings }) => {
  const [startFillringsCollection, setStartFillringsCollection] = useState("");

  useEffect(() => {
    if (startFillringsCollection === undefined) {
      setStartFillringsCollection(null);
    } else if (startFillRings) {
      setStartFillringsCollection([
        ...startFillringsCollection,
        {
          input: startFillRings,
        },
      ]);
    }
  }, [startFillRings]);
  console.log(startFillringsCollection);
  return (
    <>
      <div className="container">{startFillRings}</div>
      <style jsx>
        {`
          .container {
            background-color: #bebebe;
            grid-area: middle;
          }
        `}
      </style>
    </>
  );
};

export default MiddleComponent;
