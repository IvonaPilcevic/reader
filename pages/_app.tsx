import React from "react";
import type { AppProps } from "next/app";

import { Container } from "@material-ui/core";

import { StoreProvider } from "../src/store/store";

import { Layout } from "../src/components/Layout/Layout";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Container className="main-container">
          <Component {...pageProps} />
        </Container>
      </Layout>
    </StoreProvider>
  );
}
export default MyApp;
