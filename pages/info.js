import React from "react";
import ButtonComponent from "../src/components/common/buttons/ButtonComponent";
import Link from "next/link";

const info = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Postarkiv</h1>
        <div className="release-container">
          <p className="sub-header">Første utgave, april 2016</p>
          <p className="text">Ble laget med Microsoft Excel.</p>
        </div>
        <div className="release-container">
          <p className="sub-header">Andre utgave, 8 februar 2020</p>
          <p className="text">
            Blir påbegynt desember 2019. Blir laget med JavaScript som en
            webapplikasjon uten database. Er heller ikke responsiv og fungerer
            ikke på små skjermer som mobil og nettbrett.{" "}
            <a href="https://mkv-calculator-awcsqbdb7.vercel.app">
              Andre utgave
            </a>
          </p>
        </div>
        <div className="release-container">
          <p className="sub-header">Tredje utgave, august 2020</p>
          <p className="text">
            Denne utgaven har mulighet til å lagre nye poster rett fra
            programmet fordi den er tilkoblet en database. Det må også være
            innlogging.{" "}
            <a href="https://mkv-calculator-mobile.vercel.app">Tredje utgave</a>
          </p>
        </div>
        <div className="release-container">
          <p className="sub-header">Fjerde utgave, september 2021</p>
          <p className="text">
            Utgaven er appen som du bruker nå. I utgangspunktet het denne appen
            Skurlister, det var bare en egen app som man kunne velge poster rett
            fra ordrelister. Man kunne ikke lage egne poster eller søke manuelt.
            Etterhvert ble det lagt inn manuelt søk og mulighet til å lage nye
            poster å lagre de. Da ble det også innloggin på denne siden. Denne
            appen erstatter etterhvert den tredje utgaven.
          </p>
        </div>

        <ButtonComponent title="Tilbake" type="outline" link="/" />
      </div>
      <style jsx>
        {`
          .container {
            padding: 10rem;
          }
          .header {
            font-weight: 400;
            margin-bottom: 1rem;
          }
          .release-container {
            margin-bottom: 2rem;
            width: 35rem;
          }
          .sub-header {
            font-weight: 400;
          }
          .text {
            font-weight: 100;
          }
          @media (max-width: 1000px) {
            .container {
              padding: 0.5rem;
            }
            .release-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default info;
