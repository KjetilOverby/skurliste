import React from "react";

const TopComponent = () => {
  return (
    <>
      <div className="container">Top</div>
      <style jsx>
        {`
          .container {
            grid-area: top;
            background: #dbdbdb;
          }
        `}
      </style>
    </>
  );
};

export default TopComponent;
