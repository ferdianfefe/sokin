import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { SessionProvider } from "next-auth/react";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import { useEffect } from "react";

import "../src/styles/global.css"

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  useEffect(() => {}, []);

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
        <Component {...pageProps} />
      </SessionProvider>
    </Refine>
  );
}

export default MyApp;
