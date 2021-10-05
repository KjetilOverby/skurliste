import React from "react";

const ProsentSelect = ({ setProsentValg }) => {
  return (
    <>
      <div className="container">
        <select onChange={(e) => setProsentValg(e.target.value)}>
          <option value="">Velg prosent</option>
          <option value="-18%-">18%</option>
          <option value="-12%-">12%</option>
          <option value="-18/12%-">18/12%</option>
          <option value="-12/18%-">12/18%</option>
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

export default ProsentSelect;
