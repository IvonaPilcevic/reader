import React from "react";
import { nanoid } from "nanoid";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";
import {
  CircularProgress,
  createTheme,
  ThemeProvider,
  Button,
  Tooltip,
} from "@material-ui/core";

import { useStore } from "../../store/store";
import { Book } from "../../types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bfd7e3",
    },
  },
});

export const Suggestions: React.FC<{
  suggestions: any;
  loading: boolean;
}> = observer(({ suggestions, loading }) => {
  const store: any = toJS(useStore());

  const [showAll, setShowAll] = React.useState<boolean>(false);

  const options = suggestions?.map((suggestion: any) => (
    <div style={{ marginBottom: "5px" }} key={nanoid()}>
      <SearchIcon fontSize="small" /> &nbsp;
      {suggestion?.title}, &nbsp;
      {suggestion?.author_name?.map((author: string) => author) || "unknown"},
      &nbsp; ({suggestion?.first_publish_year || "unknown"})
      {store?.books?.filter(
        (book: Book) => book?.title === suggestion?.title
      ) <= 0 && (
        <div
          style={{ display: "inline-block", marginLeft: "15px" }}
          onClick={() =>
            store?.addBook({
              title: suggestion?.title,
              author:
                suggestion?.author_name?.map((author: string) => author) ||
                "unknown",
              year: suggestion?.first_publish_year || "unknown",
              done: false,
              notes: "",
              id: suggestion?.key,
            })
          }
        >
          <Tooltip title="Add to reading list">
            <AddCircleOutlineOutlinedIcon fontSize="small" />
          </Tooltip>
        </div>
      )}
    </div>
  ));

  const optionsToShow = showAll ? options : options?.slice(0, 10);

  return (
    <div>
      {(loading && (
        <div className="loading-wrap">
          {" "}
          <ThemeProvider theme={theme}>
            <CircularProgress color="primary" />{" "}
          </ThemeProvider>
        </div>
      )) ||
        (options?.length && (
          <div className="suggestions">
            {optionsToShow}

            <Button
              className="button-dark"
              style={{ marginTop: "15px" }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View less" : "Show all"}
            </Button>
          </div>
        )) ||
        null}
    </div>
  );
});
