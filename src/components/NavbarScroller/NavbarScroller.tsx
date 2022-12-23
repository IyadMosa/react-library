import * as React from "react";
import { Li, Navbar, Ul, Brand } from "./styles";
import { FC } from "react";
export interface Props {
  brand: any;
  links: any;
  disabled?: boolean;
}

const NavbarScroller: FC<Props> = ({ brand = {}, links = [], ...props }) => {
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>
  );
};

export default NavbarScroller;
