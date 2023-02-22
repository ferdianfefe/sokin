import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";

//import "src/styles/globals.css";

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
