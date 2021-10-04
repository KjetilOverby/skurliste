import React from "react";

const TopComponent = () => {
  return (
    <>
      <div className="container">Top</div>
      <style jsx>
        {`
          .container {
            grid-area: top;
            background: #ffffff;
          }
        `}
      </style>
    </>
  );
};

export default TopComponent;
