// @ts-ignore
import React from "react";
import MainScreen from "./MainScreen";

export default {
  title: "MainScreen",
};

export const mainScreen = () => {
  const brand = { name: "NavbarScroller", to: "/" };
  const links = [
    { name: "About Me", to: "/about", component: <div>About Me</div> },
    { name: "Blog", to: "/blog", component: <div>Blog</div> },
    { name: "Development", to: "/dev", component: <div>Development</div> },
    { name: "Graphic Design", to: "/design", component: <div>Design</div> },
    { name: "Contact", to: "/contact", component: <div>Contact</div> },
  ];
  return <MainScreen brand={brand} links={links} />;
};
