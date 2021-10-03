import React, { useState, useEffect } from "react";
import PostarkivStartPage from "../src/components/postarkiv/PostarkivStartPage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const postarkiv = ({
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
}) => {
  const [postarkiv, setPostarkiv] = useState();
  const [getSearch, setGetSearch] = useState();
  const [getID, setGetID] = useState();
  useEffect(() => {
    try {
      api.get(`/api/postarkiv/post_btn_search`).then((res) => {
        setPostarkiv(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getSearch]);
  console.log(getID);

  return (
    <>
      <div className="container">
        <PostarkivStartPage
          postarkiv={postarkiv}
          setGetSearch={setGetSearch}
          getSearch={getSearch}
          setGetID={setGetID}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
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

export default postarkiv;
