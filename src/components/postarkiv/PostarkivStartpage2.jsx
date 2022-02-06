import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderComponent from "../common/HeaderComponent";

const PostarkivStartpage2 = ({
  postarkiv,
  setGetSearch,
  getSearch,
  setGetID,
  getID,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  rawRingsPostOppsett,
  setGetIdforDelete,
  setCreateDate,
}) => {
  const [filteredData, setFilteredData] = useState();
  const [input, setInput] = useState();
  const router = useRouter();
  useEffect(() => {
    if (postarkiv) {
      setFilteredData(postarkiv.filter((item) => item.header.includes(input)));
    }
  }, [input]);
  return (
    <>
      <div className="container">
        <div className="header-fill"></div>
        <div className="headerComponentContainer">
          <HeaderComponent />
          <div className="input-container">
            <input
              className="input"
              placeholder="Søk"
              onChange={(e) => setInput(e.target.value)}
            />
            <p className="antall">
              Antall: {filteredData && filteredData.length}
            </p>
          </div>
        </div>

        {filteredData &&
          filteredData.map((item) => {
            const getPostHandler = () => {
              setHeaderPostOppsett(item.header);
              setStartRingsPostOppsett(item.startRings);
              setRawRingsPostOppsett(item.rawInput);
              setEndRingsPostOppsett(item.endRings);
              setBladstamme(item.blades.bladStamme);
              router.push("/postoppsett");
              setGetIdforDelete(item._id);
              setCreateDate(item.date);
            };
            return (
              <div
                key={item._id}
                className="post-container"
                onClick={getPostHandler}
              >
                <p className="header">{item.header}</p>
                <div className="ring-container">
                  {item.startRings.map((item) => (
                    <p key={item.input._id} className="rings">
                      {item.input}
                    </p>
                  ))}
                  {item.rawInput.map((item) => (
                    <p key={item.input._id} className="rings rawinput">
                      {(item.input + 1.4).toFixed(1)}
                      <p key={item.input._id} className="rawGauge">
                        {item.input}
                      </p>
                    </p>
                  ))}
                  {item.endRings.map((item) => (
                    <p key={item.input._id} className="rings endrings">
                      {item.input}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .antall {
            color: #797979;
            margin-left: 1rem;
          }
          .container {
            display: grid;
            place-items: center;
          }
          .header {
            margin-bottom: 2rem;
            text-align: center;
          }
          .header-component {
            padding: 2rem 0;
            background-color: #d8d8d8;
            width: 100%;
            margin-bottom: 2rem;
            position: fixed;
            z-index: 100;
          }
          .headerComponentContainer {
            position: fixed;
            display: grid;
            place-items: center;
            width: 100%;
            background-color: #d3d3d3;
            z-index: 100;
          }
          .header-fill {
            height: 10rem;
          }
          .input {
            margin-bottom: 2rem;
          }
          .input-container {
            display: flex;
          }
          .header-component-fill {
            height: 10rem;
          }
          .rings {
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            border: 1px solid #a3a1a171;
            padding: 0.5rem;
            font-size: 0.5rem;
            height: 3.5rem;
            width: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.2rem;
            border-radius: 3px;
            box-shadow: 2px 2px 10px grey;
          }
          .endrings {
          }
          .rawinput {
            background-image: linear-gradient(
              -225deg,
              #ffe29f 0%,
              #ffa99f 48%,
              #ff719a 100%
            );
            position: relative;
          }
          .ring-container {
            display: flex;
          }
          .rawGauge {
            position: absolute;
            top: -0.8rem;
          }
          .post-container {
            margin-bottom: 5rem;
            transition: 0.2s;
          }
          .post-container:hover {
            transform: scale(1.05);
            color: blue;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default PostarkivStartpage2;
