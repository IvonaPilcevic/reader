import React from "react";
import { ListItem } from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import { MarkAsDoneIcon, NotesIcon, RemoveFromListIcon } from "./ListIcons";

export const BookListItem: React.FC<{
  title: string;
  name: string;
  year: string;
  done: boolean;
  removeItem: any;
  markAsDone: any;
  markAsIncomplete: any;
  saveNote: any;
  note: string;
}> = ({
  title,
  name,
  year,
  done,
  removeItem,
  markAsDone,
  markAsIncomplete,
  saveNote,
  note,
}) => {
  return (
    <ListItem>
      <StarBorder color="disabled" /> &nbsp;
      <span>
        <span className="book-title">{title}</span>, &nbsp; {name}, &nbsp; (
        {year})
      </span>
      <MarkAsDoneIcon
        done={done}
        markAsDone={markAsDone}
        markAsIncomplete={markAsIncomplete}
      />
      <NotesIcon note={note} saveNote={saveNote} />
      <RemoveFromListIcon removeItem={removeItem} />
    </ListItem>
  );
};
