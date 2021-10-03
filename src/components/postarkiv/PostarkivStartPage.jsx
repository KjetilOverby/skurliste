import React from "react";
import SearchComponent from "./SearchComponent";
import Link from "next/link";

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
        <div className="header-container">
          <h1 className="header">Søk i postarkiv</h1>
        </div>
        <div className="btn-container">
          <Link href="/">
            <button className="button">Startsiden</button>
          </Link>
          <Link href="/skurliste">
            <button className="button">Skurliste</button>
          </Link>
        </div>
        <div className="search-component-container">
          <div className="circle"></div>
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
      </div>
      <style jsx>
        {`
          .btn-container {
            grid-area: btn;
            display: flex;
            flex-direction: column;
            padding: 0 2rem;
          }
          .button {
            margin-bottom: 1rem;
            padding: 0.5rem 0;
          }
          .container {
            display: grid;
            grid-template-rows: 10rem 1fr 5rem;
            grid-template-columns: 20rem 1fr 20rem;
            grid-template-areas:
              "header header header"
              "btn search ."
              ". . .";
            min-height: 100vh;
          }
          .circle {
            height: 90rem;
            width: 90rem;
            background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
            position: absolute;
            border-radius: 50%;
            left: 50%;
          }
          .header-container {
            grid-area: header;
            display: grid;
            place-items: center;
          }
          .header {
            color: #808080;
          }
          .search-component-container {
            background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: grid;
            place-items: center;
            grid-area: search;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default PostarkivStartPage;
