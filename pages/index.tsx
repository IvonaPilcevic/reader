import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { Container, Grid, List, ListItem } from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";

import { useStore } from "../src/store/store";
import { BasicList } from "../src/components/BasicList/BasicList";
import { Search } from "../src/components/Search/Search";
import { Button } from "../src/components/Button";

const Home = observer(() => {
  const store: any = toJS(useStore());

  return (
    <Container>
      <Grid container justifyContent="space-around">
        <Search />
        <BasicList
          listName="Reading List"
          items={store.books}
          hasButton
          buttonHref="/reading-list"
          buttonText="ADD MORE + "
        />

        <div>
          <h1>My lists</h1>
          <List>
            {Object.keys(store?.readingLists)?.map((listName: any) => (
              <ListItem key={listName}>
                <StarBorder color="disabled" /> &nbsp;
                <span>
                  {listName}
                  {/* {item?.title}, {item?.author} ({item?.year}) */}
                </span>
              </ListItem>
            ))}
          </List>

          <Button
            href={"/my-lists"}
            text={"ADD MORE + "}
            variant="button-dark"
          />
        </div>
      </Grid>
    </Container>
  );
});

export default Home;
