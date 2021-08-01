import React from "react";
import { Input } from "@material-ui/core";

interface Props {
  title: string;
  author: string;
  year: string;
  handleChangeTitle: any;
  handleChangeAuthor: any;
  handleChangeYear: any;
  addNewBook: any;
}

export const AddNewBookForm: React.FC<Props> = ({
  title,
  author,
  year,
  handleChangeTitle,
  handleChangeAuthor,
  handleChangeYear,
  addNewBook,
}) => {
  return (
    <div style={{ padding: "30px" }}>
      <div style={{ maxWidth: "250px", marginBottom: "20px" }}>
        <Input
          fullWidth
          placeholder="Add title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div style={{ maxWidth: "250px", marginBottom: "20px" }}>
        <Input
          fullWidth
          placeholder="Add Author"
          value={author}
          onChange={handleChangeAuthor}
        />
      </div>
      <div style={{ maxWidth: "250px", marginBottom: "20px" }}>
        <Input
          fullWidth
          placeholder="Add publish year"
          value={year}
          onChange={handleChangeYear}
        />
      </div>
      <div
        className="button-light"
        onClick={() => addNewBook(title, author, year)}
      >
        ADD NEW +
      </div>
    </div>
  );
};
