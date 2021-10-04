import React from "react";

const LeftComponent = ({ setLeftPanelSlide }) => {
  return (
    <>
      <div className="container">
        <button
          onClick={() => setLeftPanelSlide("container-open")}
          className="btn"
        >
          Legg til råmål
        </button>
        <button
          onClick={() => setLeftPanelSlide("container-closed")}
          className="btn"
        >
          Legg til utfylling foran
        </button>
        <button
          onClick={() => setLeftPanelSlide("container-closed")}
          className="btn"
        >
          Legg til utfylling bak
        </button>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: left;
            background: #ffffff;
            padding: 2rem;
          }
          .btn {
            width: 11rem;
            height: 3rem;
            background: #87aaaf;
            font-size: 0.9rem;
            border: none;
            margin-bottom: 1rem;
          }
          .btn:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default LeftComponent;
