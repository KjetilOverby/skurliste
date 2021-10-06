import React from "react";

const LeftComponent = ({
  setLeftPanelSlide,
  setEndringPanel,
  saveCreatedPost,
}) => {
  const rawInputBtn = () => {
    setLeftPanelSlide("container-open");
    setEndringPanel("container-closed");
  };
  const startRingInput = () => {
    setLeftPanelSlide("container-closed");
    setEndringPanel("container-closed");
  };
  const endRingInput = () => {
    setEndringPanel("container-open");
    setLeftPanelSlide("container-closed");
  };
  return (
    <>
      <div className="container">
        <button onClick={rawInputBtn} className="btn">
          Legg til råmål
        </button>
        <button onClick={startRingInput} className="btn">
          Legg til utfylling foran
        </button>
        <button onClick={endRingInput} className="btn">
          Legg til utfylling bak
        </button>
        <button onClick={saveCreatedPost} className="btn">
          Lagre post
        </button>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: left;
            background: #ffffff;
            border-right: 1px solid #bebebe;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 2rem;
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
