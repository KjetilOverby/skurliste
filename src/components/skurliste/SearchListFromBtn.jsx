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
        <button onClick={() => setOpenSearchList(false)}>Lukk</button>
        <button onClick={searchAllBlades}>Søk alle blad</button>
      </div>
      <style jsx>
        {`
          .container {
            background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
            position: fixed;
            padding: 2rem;
            margin-left: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            box-shadow: 10px 10px 50px black;
            border: 1px solid grey;
            animation: bounceInLeft .7s forwards;
          }

          .btn {
            border: 1px solid white;
            padding: 0.5rem;
            color: white;
            margin: 1rem;
            transition: 0.5s;
            border-radius: 5px;
          }
          .btn:hover {
            cursor: pointer;
            background-color: #507885;
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
