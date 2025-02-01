import React, { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }): React.JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
