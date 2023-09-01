import LoginWithEmail from "@/components/LoginWithEmail/LoginWithEmail";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Login with email </title>
        <meta name="description" content="login with email address" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LoginWithEmail />
      </div>
    </Fragment>
  );
}
