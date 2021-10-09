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
        <div>
          <div className="blade-select-container">
            <BladeSelectComponent setBladeDimension={setBladeDimension} />
          </div>
          <div className="prosent-select-container">
            <ProsentSelect setProsentValg={setProsentValg} />
          </div>
        </div>
        <div className="input-container">
          <div>
            <input
              className="input"
              onChange={(e) => setPlankeTykkelse(e.target.value)}
              placeholder="Planktykkelse-eks: 50/38"
            />
          </div>
          <div>
            <input
              className="input"
              onChange={(e) => setSpesiellePlankeTykkelser(e.target.value)}
              placeholder="Spes. råmål: (52.2/52.5)"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: top;
            background: #ffffff;
            padding: 2rem;
            display: flex;
          }
          .input-container {
            margin-left: 1rem;
          }
          .input {
            background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            height: 2rem;
            font-size: 1rem;
            margin-bottom: 1rem;
            border: none;
          }
        `}
      </style>
    </>
  );
};

export default TopComponent;
