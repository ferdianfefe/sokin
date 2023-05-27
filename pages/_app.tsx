import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { SessionProvider } from "next-auth/react";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import { useEffect } from "react";
import io from "socket.io-client";
let socket: any;
import './ProgressBar.css';

import "../src/styles/global.css";

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket/");
    socket = io();
    socket.on("connect", () => {
      console.log("connected");
    });
  };

  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      resources={[
        {
          name: "posts",
          list: HeadlessInferencer,
          edit: HeadlessInferencer,
          show: HeadlessInferencer,
          create: HeadlessInferencer,
          canDelete: true,
        },
      ]}
    >
      <SessionProvider session={session}>
        <Component className="h-screen" {...pageProps} />
      </SessionProvider>
    </Refine>
  );
}

export default MyApp;
