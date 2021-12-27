import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchListFromBtn = ({
  filteredPostList,
  setPostOppsett,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setOpenSearchList,
  searchAllBlades,
  setCreateDate,
}) => {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <h1>
          {filteredPostList &&
            filteredPostList.map((item) => {
              const getPostOppsett = () => {
                setHeaderPostOppsett(item.header);
                setStartRingsPostOppsett(item.startRings);
                setRawRingsPostOppsett(item.rawInput);
                setEndRingsPostOppsett(item.endRings);
                setBladstamme(item.blades.bladStamme);
                setCreateDate(item.date);
                router.push("/postoppsett");
                setOpenSearchList(false);
              };
              return (
                <>
                  <p key={item._id} onClick={getPostOppsett} className="btn">
                    {item.header}
                  </p>
                </>
              );
            })}
        </h1>
        <div className="option-btn-container">
          <button
            className="option-btn"
            onClick={() => setOpenSearchList(false)}
          >
            Lukk
          </button>
          <button className="option-btn" onClick={searchAllBlades}>
            Søk alle blad
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
            position: fixed;
            padding: 2rem;
            margin-left: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            box-shadow: 10px 10px 50px black;
            animation: bounceInLeft .7s forwards;
          }

          .btn {
            border: none;
            padding: 0.5rem;
            color: #1d1475;
            margin: 1rem;
            transition: 0.5s;
            border-radius: 5px;
            background: #ffffff;
            font-weight: 300
          }
          .btn:hover {
            cursor: pointer;
            background-color: #8fd1e7;
          }
          .option-btn-container {
            display: flex;
            width: 18rem;
            justify-content: space-between;
            padding-left: 1rem;
            
          }
          .option-btn {
            width: 8rem;
            height: 2rem;
            
          }
          @keyframes move {
            0% {
              transform: translateX(-20rem);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }

        `}
      </style>
    </>
  );
};

export default SearchListFromBtn;
