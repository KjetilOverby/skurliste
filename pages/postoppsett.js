import React from "react";
import Blade from "../src/components/poster/Blade";
import Fillrings from "../src/components/poster/Fillrings";
import RawRings from "../src/components/poster/RawRings";
import Users from "../utils/users";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import ModalComponent from "../src/components/common/ModalComponent";
import dateFormat from "dateformat";

const Postoppsett = ({
  headerPostOppsett,
  startRingsPostOppsett,
  rawRingsPostOppsett,
  endRingsPostOppsett,
  bladstamme,
  background,
  openDeleteModal,
  setOpenDeleteModal,
  deletePostHandler,
  createDate,
}) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="container">
        <div className="info-box">
          <Link href="/skurliste">
            <button className="btn">Skurliste</button>
          </Link>
          <Link href="/postarkiv">
            <button className="btn">Søk i postarkivet</button>
          </Link>
          <Link href="/">
            <button className="btn ">Startsiden</button>
          </Link>
        </div>
        <div className="info-box2">
          {user && user.sub === process.env.USER_SUB && (
            <button
              onClick={() => setOpenDeleteModal(true)}
              className="btn btn-delete"
            >
              Slett denn posten
            </button>
          )}
          <p className="info-text">
            Opprettelsesdato:{" "}
            {createDate === undefined
              ? "Ukjent"
              : dateFormat(createDate, "dd.mm.yyyy HH:MM")}
          </p>
        </div>
        <div className="headerContainer">
          <h1 className="header">{headerPostOppsett}</h1>
        </div>
        <div className="fillRingContainer">
          {startRingsPostOppsett &&
            startRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className="fillRingContainer">
                    <Fillrings value={item.input} />
                  </div>
                </>
              );
            })}
          {rawRingsPostOppsett &&
            rawRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className="fillRingContainer">
                    <RawRings
                      rawValue={item.input}
                      bladstamme={bladstamme}
                      ring={item.ring}
                      shims1={item.shims}
                      shims2={item.shims2}
                      shims3={item.shims3}
                    />
                  </div>
                </>
              );
            })}
          <Blade bladstamme={bladstamme} />
          {endRingsPostOppsett &&
            endRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className="fillRingContainer">
                    <Fillrings value={item.input} />
                  </div>
                </>
              );
            })}
        </div>
        {user && user.sub === Users && (
          <div className="userContainer">
            <p>
              innlogged som: {user.name} * email: {user.email} * © copyright
              2021
            </p>
          </div>
        )}
        {openDeleteModal && (
          <ModalComponent
            header="Slett denne posten"
            setOpenDeleteModal={setOpenDeleteModal}
            deleteHandler={deletePostHandler}
          />
        )}
      </div>
      <style jsx>
        {`
          .header {
            color: #fff;
          }
          .headerContainer {
            grid-area: header;
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }
          .container {
            position: relative;
            display: grid;
            grid-template-rows: 1fr 30rem 1fr;
            grid-template-areas:
              "header"
              "postContainer"
              ".";
            min-height: 100vh;
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.8) 35%,
                rgba(0, 0, 0, 0.8) 100%
              ),
              url(${background});
            background-size: cover;
          }
          .fillRingContainer {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            grid-area: postContainer;
          }
          .userContainer {
            position: absolute;
            bottom: 0;
            left: 0;
            color: #bdbdbd;
            animation: move 4s forwards;
            animation-timing-function: linear;
          }
          .info-box {
            color: #bdbdbd;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 2rem;
          }
          .info-box2 {
            color: #bdbdbd;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            bottom: 0;
          }
          .info-text {
            font-size: 0.8rem;
          }
          .btn {
            height: 3rem;
            width: 12rem;
            border: none;

            margin-bottom: 1rem;
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #222 50%, #4a6a76 50%);
            background-size: 220%;
            color: #aaa;
          }
          .btn:hover {
            cursor: pointer;
            background-position: 100%;
          }
          .btn-delete {
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #222 50%, #a23 50%);
            background-size: 220%;
          }
          .btn-delete:hover {
            background-position: 100%;
          }
          @keyframes move {
            0% {
              transform: translateX(-40rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }
          @media (max-width: 1000px) {
            grid-template-rows: 1rem 1fr 0rem;
          }
        `}
      </style>
    </>
  );
};

export default Postoppsett;
