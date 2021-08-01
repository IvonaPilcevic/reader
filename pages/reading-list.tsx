import React from "react";
import { observer } from "mobx-react-lite";
import { BookList } from "../src/components/BookList/BookList";

const ReadingList = observer(() => {
  return <BookList />;
});

export default ReadingList;
