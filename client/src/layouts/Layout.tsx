import React, { FC } from "react";
import Header from "../components/Header";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }): React.JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
