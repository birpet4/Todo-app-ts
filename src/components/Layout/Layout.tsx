import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
