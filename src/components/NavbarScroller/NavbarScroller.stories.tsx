// @ts-ignore
import React from "react";
import NavbarScroller from "./NavbarScroller";

export default {
  title: "Navigator",
};

export const navigator = () => {
  const brand = { name: "NavbarScroller", to: "/" };
  const links = [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Developement", to: "/dev" },
    { name: "Graphic Design", to: "/design" },
    { name: "Contact", to: "/contact" },
  ];
  return <NavbarScroller brand={brand} links={links} />;
};
