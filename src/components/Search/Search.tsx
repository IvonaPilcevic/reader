import React from "react";
import { Container, Input } from "@material-ui/core";
import { Suggestions } from "../Suggestions/Suggestions";

export const Search = () => {
  const [searchResult, setSearchResult] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string>("");

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query === "") {
        setSearchResult([]);
      } else {
        setLoading(true);
        fetch(`${process.env.URL}/search.json?q=${query}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResult(data?.docs);
            setLoading(false);
          })
          .catch((error) => {
            console.error("!error", error);
            setLoading(false);
          });
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Container>
      <Input
        disableUnderline
        className={(searchResult.length && "search-bar") || "search-bar-empty"}
        type="text"
        placeholder="Search by title, author, description, ..."
        onChange={(e: any) => setQuery(e?.target?.value?.split(" ")?.join("+"))}
      />
      <Suggestions suggestions={searchResult} loading={loading} />
    </Container>
  );
};
