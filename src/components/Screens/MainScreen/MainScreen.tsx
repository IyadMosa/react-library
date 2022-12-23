import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarScroller from "../../NavbarScroller/NavbarScroller";
import { Li } from "../../NavbarScroller/styles";

export interface Props {
  brand: any;
  links: any;
  disabled?: boolean;
}

const MainScreen: FC<Props> = ({ brand = {}, links = [], ...props }) => {
  const Routes: any = () =>
    links.map(
      (link: {
        name: string;
        to: string;
        component: React.ReactNode | string;
      }) => <Route path={link.to}>{link.component}</Route>
    );
  return (
    <BrowserRouter>
      <NavbarScroller brand={brand} links={links} disabled={props.disabled} />
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
};
export default MainScreen;
