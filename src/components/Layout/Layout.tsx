import React from "react";
import { Container } from "@material-ui/core";
import { Menu } from "../Menu/Menu";

export const Layout = (props: any) => {
  return (
    <Container>
      <Menu />
      {props.children}
    </Container>
  );
};
