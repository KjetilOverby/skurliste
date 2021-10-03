import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchComponent = ({
  postarkiv,
  setGetSearch,
  getSearch,
  setGetID,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
}) => {
  const [searchresult, setSearchresult] = useState();

  const getSearchHandler = (e) => {
    setGetSearch(e.target.value);
  };
  useEffect(() => {
    if (postarkiv) {
      setSearchresult(
        postarkiv.filter((post) => {
          return post.header.includes(getSearch);
        })
      );
    }
  }, [getSearch]);
  const router = useRouter();
  return (
    <>
      <div className="container">
        <input
          placeholder="Søk i poster"
          className="input"
          onChange={getSearchHandler}
        />

        <div className="search-list-container">
          {searchresult &&
            searchresult.map((result) => {
              const getPostHandler = () => {
                setHeaderPostOppsett(result.header);
                setStartRingsPostOppsett(result.startRings);
                setRawRingsPostOppsett(result.rawInput);
                setEndRingsPostOppsett(result.endRings);
                setBladstamme(result.blades.bladStamme);
                router.push("/postoppsett");
              };
              return (
                <div className="item-container">
                  <p className="header" onClick={getPostHandler}>
                    {result.header}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 40vh;
            width: 50rem;

            padding: 1rem;
          }
          .header {
            cursor: pointer;
          }
          .input {
            width: 100%;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            outline: none;
            margin-bottom: 2rem;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
          }
          .item-container {
            padding: 0.5rem;
          }
          .item-container:hover {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }
          .search-list-container {
            overflow: scroll;
            height: 100%;
            padding: 2rem;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
};

export default SearchComponent;
