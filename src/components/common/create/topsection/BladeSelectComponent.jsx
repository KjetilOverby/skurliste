import React from "react";

const BladeSelectComponent = ({ setBladeDimension }) => {
  return (
    <>
      <div className="container">
        <select
          onChange={(e) => setBladeDimension({ bladStamme: e.target.value })}
        >
          <option value="">Velg sagblad</option>
          <option value="2.2">2.2-3.6</option>
          <option value="2.4">2.4-3.8</option>
          <option value="2.6">2.6-4.0</option>
          <option value="2.8">2.8-4.2</option>
          <option value="3.0">3.0-4.4</option>
          <option value="3.2">3.2-4.6</option>
        </select>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default BladeSelectComponent;
