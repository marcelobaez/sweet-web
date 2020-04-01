import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { UserProvider } from "../utils/user";

const Layout = ({ user, loading = false, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </UserProvider>
  );
};

export default Layout;
