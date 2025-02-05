import React from "react";
import pageNotFoundPic from "../assets/404.webp";

const PageNotFound = (): React.JSX.Element => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-stone-100">
      <img
        src={pageNotFoundPic}
        loading="lazy"
        alt="Page Not Found"
        width={500}
      />
      <h1 className="text-7xl font-extrabold animate-bounce">404</h1>
      <h3 className="text-4xl font-semibold animate-bounce">Page Not Found</h3>
    </div>
  );
};

export default PageNotFound;
