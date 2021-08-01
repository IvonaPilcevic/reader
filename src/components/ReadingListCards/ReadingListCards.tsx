import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import {
  Container,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useStore } from "../../store/store";

import { AddNewBookForm } from "../BookList/AddNewBookForm";
import { SingleReadingListCard } from "./SingleReadingListCard";
import { AddNewListForm } from "./AddNewListForm";

export const ReadingListCards = observer(() => {
  const store: any = toJS(useStore());
  const [listName, setListName] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const [selectedList, setSelectedList] = React.useState<string>("");

  return (
    <Container>
      <h2>My lists ({Object.keys(store?.readingLists)?.length})</h2>
      <Grid container justifyContent="space-between">
        {Object.keys(store?.readingLists)?.map((listName: string) => (
          <Grid style={{ maxWidth: "30%" }} key={listName}>
            <SingleReadingListCard
              listName={listName}
              removeList={() => store?.removeList(listName)}
              readingList={store?.readingLists[listName]}
              removeItemFromList={store?.removeItemFromList}
            />
          </Grid>
        ))}
      </Grid>
      <AddNewListForm
        listName={listName}
        listNameChangeHandler={(e: any) => setListName(e.target.value)}
        addNewList={() => {
          if (listName && listName !== "") {
            store?.addList(listName);
            setListName("");
          }
        }}
      />
      <div
        style={{ maxWidth: "250px", paddingLeft: "30px", marginTop: "40px" }}
      >
        <InputLabel>Select a list</InputLabel>
        <Select
          fullWidth
          value={selectedList}
          onChange={(e: any) => setSelectedList(e.target.value)}
        >
          {Object.keys(store?.readingLists)?.map((listName) => (
            <MenuItem key={listName} value={listName}>
              {listName}
            </MenuItem>
          ))}
        </Select>
      </div>
      <AddNewBookForm
        title={title}
        author={author}
        year={year}
        handleChangeAuthor={(e: any) => setAuthor(e.target.value)}
        handleChangeTitle={(e: any) => setTitle(e.target.value)}
        handleChangeYear={(e: any) => setYear(e.target.value)}
        addNewBook={() => {
          if (
            title !== "" &&
            author !== "" &&
            year !== "" &&
            selectedList !== ""
          ) {
            store.addItemToList(
              { title, author, year, notes: "", done: false },
              selectedList
            );
            setTitle("");
            setAuthor("");
            setYear("");
          }
        }}
      />
    </Container>
  );
});
