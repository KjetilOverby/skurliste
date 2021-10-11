import React, { useState, useEffect } from "react";
import PostarkivStartPage from "../src/components/postarkiv/PostarkivStartPage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const Postarkiv = ({
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  rawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setGetIdforDelete,
  setCreateDate,
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

  return (
    <>
      <div className="container">
        <PostarkivStartPage
          postarkiv={postarkiv}
          setGetSearch={setGetSearch}
          getSearch={getSearch}
          setGetID={setGetID}
          getID={getID}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          rawRingsPostOppsett={rawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setGetIdforDelete={setGetIdforDelete}
          setCreateDate={setCreateDate}
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

export default Postarkiv;
