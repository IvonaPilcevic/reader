import React from "react";
import Link from "next/link";

import { Grid, Container } from "@material-ui/core";
import { pages } from "./fixtures";
import { useRouter } from "next/dist/client/router";

export const Menu = () => {
  const router = useRouter();
  return (
    <Container className="menu-container">
      <Grid container justifyContent="space-around" className="menu">
        {pages.map((page) => (
          <Link href={page.href} key={page.href}>
            <a
              className={
                (router.asPath === page.href && "menu-active") || undefined
              }
            >
              {page.name}
            </a>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};
