import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { List } from "@material-ui/core";

import { useStore } from "../../store/store";
import { Book } from "../../types";

import { BookListItem } from "./BookListItem";
import { AddNewBookForm } from "./AddNewBookForm";

export const BookList = observer(() => {
  const store: any = toJS(useStore());

  const [title, setTitle] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");

  const addNewBook = (title: string, author: string, year: string) => {
    if (title !== "" && author !== "" && year !== "") {
      const book: Book = {
        title,
        author,
        year,
        done: false,
        notes: "",
      };
      store?.addBook(book);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  };

  return (
    <div>
      <h1>{`Reading List (${store?.books?.length})`}</h1>
      <List>
        {store?.books?.map((book: Book) => (
          <BookListItem
            key={book?.id}
            title={book?.title}
            name={book?.author}
            year={book?.year}
            done={book?.done}
            removeItem={() => store.removeBook(book.id)}
            markAsDone={() => store.markAsDone(book.id)}
            markAsIncomplete={() => store.markAsIncomplete(book.id)}
            saveNote={() => store.saveNote(book.notes, book.id)}
            note={book.notes}
          />
        ))}
      </List>

      <AddNewBookForm
        title={title}
        author={author}
        year={year}
        handleChangeTitle={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        handleChangeAuthor={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAuthor(e.target.value)
        }
        handleChangeYear={(e: React.ChangeEvent<HTMLInputElement>) =>
          setYear(e.target.value)
        }
        addNewBook={addNewBook}
      />
    </div>
  );
});
