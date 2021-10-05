import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StartPage from "../src/components/startpage/StartPage";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home({
  lists,
  dated,
  antallSum,
  kubikkSum,
  background,
  setRandomNumber,
  randomNumber,
  setGetUser,
}) {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (user) {
      setGetUser(user);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Skurliste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StartPage
        antall={lists && lists}
        dated={dated}
        antallSum={antallSum}
        kubikkSum={kubikkSum}
        background={background}
        setRandomNumber={setRandomNumber}
        randomNumber={randomNumber}
        user={user}
      />
    </div>
  );
}
