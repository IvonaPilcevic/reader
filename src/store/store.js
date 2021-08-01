import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import { nanoid } from "nanoid";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    books: [
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 2000,
        done: false,
        notes:
          "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.",
        id: nanoid(),
      },
      {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        year: 2003,
        done: true,
        notes:
          "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
        id: nanoid(),
      },
    ],
    addBook: (book) =>
      (store.books = [
        ...store.books,
        {
          ...book,
          id: nanoid(),
        },
      ]),
    removeBook: (id) =>
      (store.books = store.books.filter((book) => book.id !== id)),
    markAsDone: (id) => {
      const readBook = {
        ...store.books.find((book) => book.id === id),
        done: true,
      };
      store.books = store.books.map((book) =>
        book.id === id ? readBook : book
      );
    },
    markAsIncomplete: (id) => {
      const readBook = {
        ...store.books.find((book) => book.id === id),
        done: false,
      };
      store.books = store.books.map((book) =>
        book.id === id ? readBook : book
      );
    },
    saveNote: (note, id) => {
      const bookWithNote = {
        ...store.books.find((book) => book.id === id),
        note,
      };
      store.books = store.books.map((book) =>
        book.id === id ? bookWithNote : book
      );
    },

    readingLists: {
      Favorites: [
        {
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          year: 1997,
          id: nanoid(),
        },
        {
          title: "Harry Potter and the Chamber of Secrets",
          author: "J.K. Rowling",
          year: 1998,
          id: nanoid(),
        },
        {
          title: "Harry Potter and the Prisoner of Azkaban",
          author: "J.K. Rowling",
          year: 1999,
          id: nanoid(),
        },
      ],

      Work: [
        {
          title: "Artificial Intelligence",
          author: "Predrag Janičić, Mladen Nikolić",
          id: nanoid(),
          year: 2021,
        },
        {
          title: "Clean Code",
          author: "Robert Cecil Martin",
          year: 2000,
          id: nanoid(),
          year: 2008,
        },
        {
          title: "JavaScript: The Definitive Guide, 7th Edition",
          author: "David Flanagan",
          year: 2020,
          id: nanoid(),
        },
      ],

      Fun: [
        {
          title: "The Lord of the Rings, The Fellowship of the Ring",
          author: "J.K. Rowling",
          id: nanoid(),
          year: 1954,
        },
        {
          title: "The Lord of the Rings, The Two Towers",
          author: "J.K. Rowling",
          year: 1954,
          id: nanoid(),
        },
        {
          title: "The Lord of the Rings, ",
          author: "The Return of the King",
          year: 1955,
          id: nanoid(),
        },
      ],
    },
    addList: (listName) => {
      const newReadingLists = {
        ...store.readingLists,
      };
      newReadingLists[listName] = [];
      store.readingLists = {
        ...newReadingLists,
      };
    },
    removeList: (listName) => {
      const newReadingLists = {
        ...store.readingLists,
      };
      delete newReadingLists[listName];
      store.readingLists = {
        ...newReadingLists,
      };
    },
    removeItemFromList: (itemId, listName) => {
      const list = store.readingLists[listName];
      const newItems = list?.filter((e) => e.id !== itemId);
      const newReadingLists = {
        ...store.readingLists,
      };
      newReadingLists[listName] = newItems;

      store.readingLists = newReadingLists;
    },
    addItemToList: (item, listName) => {
      const list = store.readingLists[listName];
      const newItems = [...list, item];
      const newReadingLists = {
        ...store.readingLists,
      };
      newReadingLists[listName] = newItems;

      store.readingLists = newReadingLists;
    },
  }));

  return (
    <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
