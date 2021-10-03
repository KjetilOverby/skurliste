import React from "react";
import SearchComponent from "./SearchComponent";

const PostarkivStartPage = ({
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
}) => {
  return (
    <>
      <div className="container">
        <h1 className="header">Søk i postarkiv</h1>
        <SearchComponent
          postarkiv={postarkiv}
          setGetSearch={setGetSearch}
          getSearch={getSearch}
          setGetID={setGetID}
          getID={getID}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          rawRingsPostOppsett={rawRingsPostOppsett}
        />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
          .header {
            margin: 5rem 0;
          }
        `}
      </style>
    </>
  );
};

export default PostarkivStartPage;
