import React from "react";
import raw from "./RawInputObject";

const RawInputList = ({ leftPanelSlide, setRawButtonValue }) => {
  const getRawRings = (e) => {
    setRawButtonValue(e.target.innerHTML);
    setTimeout(() => {
      setRawButtonValue("");
    }, 100);
  };
  return (
    <>
      <div className={`container ${leftPanelSlide}`}>
        <div>
          <p className="list-header">Nom</p>
          {raw.map((item) => {
            return (
              <p key={item.nom} className="nom">
                {item.nom}
              </p>
            );
          })}
        </div>
        <div>
          <p className="list-header">18%</p>
          {raw.map((item) => {
            return (
              <p onClick={getRawRings} key={item.nom} className="nom">
                {item.r18}
              </p>
            );
          })}
        </div>

        <div>
          <p className="list-header">12%</p>
          {raw.map((item) => {
            return (
              <p onClick={getRawRings} key={item.nom} className="nom">
                {item.r12}
              </p>
            );
          })}
        </div>
      </div>

      <style jsx>
        {`
          .container {
            background-color: #eeeeee;
            grid-area: right;

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 8rem;
            place-items: center;
            background-color: #ffffff;
            transform: translateX(30rem);
          }
          .container-open {
            animation: slide 0.8s forwards;
          }
          .container-closed {
            animation: slideBack 0.8s forwards;
          }
          .header {
            font-weight: 100;
          }
          .list-header {
            color: #307dc5;
            font-weight: bold;
            border-bottom: 1px solid #333;
          }
          .nom {
            background-color: #ffffff;
            padding: 0.2rem;
            margin-bottom: 0.5rem;
            width: 3rem;
            display: grid;
            place-items: center;
            border-bottom: 1px solid #333;
          }
          .nom:hover {
            cursor: pointer;
            background-color: #333;
            color: #fff;
          }
          @keyframes slide {
            0% {
              transform: translateX(30rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }
          @keyframes slideBack {
            0% {
              transform: translateX(0rem);
            }
            100% {
              transform: translateX(30rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default RawInputList;
