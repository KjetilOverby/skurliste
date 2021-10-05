import React from "react";
import BladeSelectComponent from "./BladeSelectComponent";
import ProsentSelect from "./ProsentSelect";

const TopComponent = ({
  setBladeDimension,
  setProsentValg,
  setPlankeTykkelse,
  setSpesiellePlankeTykkelser,
}) => {
  return (
    <>
      <div className="container">
        <div className="blade-select-container">
          <BladeSelectComponent setBladeDimension={setBladeDimension} />
        </div>
        <div className="prosent-select-container">
          <ProsentSelect setProsentValg={setProsentValg} />
        </div>
        <div>
          <input
            onChange={(e) => setPlankeTykkelse(e.target.value)}
            placeholder="Planktykkelse-eks: 50/38"
          />
        </div>
        <div>
          <input
            onChange={(e) => setSpesiellePlankeTykkelser(e.target.value)}
            placeholder="Spes. råmål: (52.2/52.5)"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: top;
            background: #ffffff;
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default TopComponent;
