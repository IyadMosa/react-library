import * as React from "react";
import { Li, Navbar, Ul, Brand, User, UserAndBrand } from "./styles";
import { FC } from "react";
export interface Props {
  user?: any;
  brand: any;
  links: any;
  disabled?: boolean;
}

const NavbarScroller: FC<Props> = ({
  user,
  brand = {},
  links = [],
  ...props
}) => {
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <Navbar>
      <UserAndBrand>
        <User>{user}</User>
        <Brand href={brand.to}>{brand.name}</Brand>
      </UserAndBrand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>
  );
};

export default NavbarScroller;
