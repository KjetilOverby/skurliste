import React from "react";
import SkurlisteComponent from "../src/components/skurliste/SkurlisteComponent";
import Link from "next/link";
var dateFormat = require("dateformat");
import { useAuth0 } from "@auth0/auth0-react";
import Users from "../utils/users";

const Skurliste = ({
  lists,
  filteredPostList,
  postList,
  setFilteredPostList,
  setPostOppsett,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setOpenSearchList,
  openSearchList,
  setOpenDeleteModal,
  dated,
  antallSum,
  kubikkSum,
  editModeColor,
  setCreateDate,
}) => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="container">
        <h1 className="header">Skurplan</h1>
        <p>Oppdatert: {dateFormat(dated, "dd.mm.yyyy HH:mm")}</p>
        <div className="btn-container">
          <Link href="/">
            <button className="btn">Til startsiden</button>
          </Link>
          {user && user.sub === Users && (
            <Link href="/rediger">
              <button className="btn">Rediger skurliste</button>
            </Link>
          )}
        </div>
        <SkurlisteComponent
          lists={lists}
          postList={postList}
          setFilteredPostList={setFilteredPostList}
          filteredPostList={filteredPostList}
          setPostOppsett={setPostOppsett}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setOpenSearchList={setOpenSearchList}
          openSearchList={openSearchList}
          setOpenDeleteModal={setOpenDeleteModal}
          antallSum={antallSum}
          kubikkSum={kubikkSum}
          editModeColor={editModeColor}
          setCreateDate={setCreateDate}
        />
      </div>
      <style jsx>
        {`
          .btn {
            margin-bottom: 0.5rem;
          }
          .btn-container {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            width: 10rem;
          }
          .container {
            margin: 1rem 3rem;
          }
          .header {
          }
          .headerType {
            color: seagreen;
          }
        `}
      </style>
    </>
  );
};

export default Skurliste;
