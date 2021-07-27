import React from "react";
import { Container } from "@material-ui/core";

export const Layout = (props: any) => {
  return <Container>{props.children}</Container>;
};
