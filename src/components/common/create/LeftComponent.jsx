import React from "react";
import Link from "next/link";

const LeftComponent = ({
  setLeftPanelSlide,
  setEndringPanel,
  saveCreatedPost,
  setStartRingsPanel,
  setRingShimsPanel,
}) => {
  const rawInputBtn = () => {
    setLeftPanelSlide("container-open");
  };
  const startRingInput = () => {
    setLeftPanelSlide("container-closed");
    setStartRingsPanel(true);
    setRingShimsPanel(false);
  };
  const endRingInput = () => {
    setLeftPanelSlide("container-closed");
    setStartRingsPanel(false);
    setEndringPanel(true);
    setRingShimsPanel(false);
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
        <hr style={{ width: "80%", color: "#f8f8f899" }} />
        <Link href="/">
          <button className="btn link">Startsiden</button>
        </Link>
        <Link href="/skurliste">
          <button className="btn link">Skurliste</button>
        </Link>
        <Link href="/postarkiv">
          <button className="btn link">Søk i postarkiv</button>
        </Link>
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
          .link {
            background: #7ea9e0;
          }
        `}
      </style>
    </>
  );
};

export default LeftComponent;
