import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeStore } from "../store";
import { Provider } from "react-redux";
import "../styles/index.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} key={router.route} />
      </Provider>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
