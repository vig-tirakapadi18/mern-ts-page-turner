import React, { FC } from "react";
import Header from "../components/Header";

const Layout: FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  );
};

export default Layout;
