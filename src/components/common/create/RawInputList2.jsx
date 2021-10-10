import React from "react";
import raw from "./RawInputObject";

const RawInputList2 = ({
  leftPanelSlide,
  setRawButtonValue,
  bladeDimension,
}) => {
  const getRawRings = (e) => {
    if (bladeDimension.bladStamme) {
      setRawButtonValue(e.target.innerHTML);
      setTimeout(() => {
        setRawButtonValue("");
      }, 100);
    } else {
      alert("Du må legge inn bladtykkelse før du kan legge in råmål");
    }
  };
  return (
    <>
      <div className={`main-container ${leftPanelSlide}`}>
        <div className="container">
          <div>
            <h1>Legg til råmål</h1>
            <form className="form">
              <label>Skriv inn råmål</label>
              <input placeholder="Råmål" />
              <button>Legg til</button>
            </form>
          </div>
          <div className="table-container">
            <table>
              <td>
                {raw.map((item) => {
                  return (
                    <p key={item.id} className="nom nominell">
                      {item.nom}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item) => {
                  return (
                    <p
                      onClick={getRawRings}
                      key={item.id}
                      className="nom nom18"
                    >
                      {item.r18}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item) => {
                  return (
                    <p
                      onClick={getRawRings}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item) => {
                  return (
                    <p
                      onClick={getRawRings}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12s}
                    </p>
                  );
                })}
              </td>
              <td>
                {raw.map((item) => {
                  return (
                    <p
                      onClick={getRawRings}
                      key={item.id}
                      className="nom nom12"
                    >
                      {item.r12s1}
                    </p>
                  );
                })}
              </td>
            </table>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .table-container {
            background-color: #b5cfb9;
          }

          td {
            border: 1px solid #333;
          }
          p {
            border: 1px solid #333;
            padding: 5px;
          }
          .main-container {
            grid-area: right;

            background-color: #ffffff;
            transform: translateX(30rem);
            overflow: scroll;
            height: 100vh;
            padding-top: 1rem;
            padding:  2.5rem;
          }
          .container {
            display: flex;
            flex-direction: column;
          }
          .container-open {
            animation: slide 0.8s forwards;
          }
          .container-closed {
            animation: slideBack 0.8s forwards;
          }
          .header {
            font-weight: 100;
          }
          .header-top {
          }
          .form {
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
          }
          .list-header {
            color: #307dc5;
            font-weig#a34949d;
            border-bottom: 1px solid #333;
          }
          .nom {
            background-color: #ffffff;
            padding: 0.2rem;
            margin-bottom: 0.5rem;
            width: 3rem;
            display: grid;
            place-items: center;
            border-bottom: 1px solid #333;
          }
          .nom18 {
            color: #3771df;
          }
          .nom12 {
            color: #864040;
          }
          .nominell {
            color: #636363;
          }
          .nom:hover {
            cursor: pointer;
            background-color: #ce3737;
            color: #fff;
          }
          .top-container {
            display: grid;
            place-items: center;
          }
          @keyframes slide {
            0% {
              transform: translateX(30rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }
          @keyframes slideBack {
            0% {
              transform: translateX(0rem);
            }
            100% {
              transform: translateX(30rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default RawInputList2;
