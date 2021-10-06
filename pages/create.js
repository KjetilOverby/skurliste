import React, { useState } from "react";
import CreateMainPage from "../src/components/common/create/CreateMainPage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const Create = () => {
  const [startFillringsCollection, setStartFillringsCollection] = useState("");
  const [rawRingsCollection, setRawRingsCollection] = useState("");
  const [endFillRingsCollection, setEndFillRingsCollection] = useState("");
  const [bladeDimension, setBladeDimension] = useState({ bladStamme: 2.8 });
  const [headerString, setHeaderString] = useState();

  const saveCreatedPost = () => {
    api
      .post("/api/postarkiv/save_created_post", {
        header: headerString,
        startRings: startFillringsCollection,
        rawInput: rawRingsCollection,
        endRings: endFillRingsCollection,
        blades: bladeDimension,
        date: new Date(),
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log("success");
        }
      });
  };
  return (
    <>
      <div className="container">
        <CreateMainPage
          saveCreatedPost={saveCreatedPost}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
          setRawRingsCollection={setRawRingsCollection}
          rawRingsCollection={rawRingsCollection}
          endFillRingsCollection={endFillRingsCollection}
          setEndFillRingsCollection={setEndFillRingsCollection}
          bladeDimension={bladeDimension}
          setBladeDimension={setBladeDimension}
          setHeaderString={setHeaderString}
        />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Create;
