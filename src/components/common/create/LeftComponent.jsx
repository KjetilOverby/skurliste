import React from "react";

const LeftComponent = () => {
  return (
    <>
      <div className="container">left</div>
      <style jsx>
        {`
          .container {
            grid-area: left;
            background: #717471;
          }
        `}
      </style>
    </>
  );
};

export default LeftComponent;
