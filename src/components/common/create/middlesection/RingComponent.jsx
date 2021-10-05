import React from "react";

const RingComponent = ({ children, color }) => {
  return (
    <>
      <div className="ring">{children}</div>
      <style jsx>
        {`
          .container {
          }
          .ring {
            height: 6rem;
            width: 3rem;
            background-image: ${color};
            border-radius: 5px;
            display: grid;
            place-items: center;
            margin-bottom: 1rem;
            border: 1px solid #8d8d8d;
            font-size: 0.8rem;
            font-weight: 300;
            margin-right: 0.3rem;
            transition: 0.5s;
            color: #ffffff;
            box-shadow: 10px 10px 20px #7e7e7eba;
          }
        `}
      </style>
    </>
  );
};

export default RingComponent;
