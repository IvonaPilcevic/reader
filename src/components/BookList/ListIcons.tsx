import React from "react";
import {
  Tooltip,
  ThemeProvider,
  createTheme,
  Modal,
  TextareaAutosize,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

const theme = createTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

export const MarkAsDoneIcon: React.FC<{
  done: boolean;
  markAsDone: any;
  markAsIncomplete: any;
}> = ({ done, markAsDone, markAsIncomplete }) => {
  return (
    <div className="icon-wrap">
      {(!done && (
        <div onClick={markAsDone}>
          <Tooltip title="Mark as done">
            <CheckCircleOutlineOutlinedIcon />
          </Tooltip>
        </div>
      )) || (
        <div onClick={markAsIncomplete}>
          <ThemeProvider theme={theme}>
            <CheckCircleIcon color="secondary" />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export const NotesIcon: React.FC<{ note: string; saveNote: any }> = ({
  note,
  saveNote,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [textInput, setTextInput] = React.useState<string>(note);

  return (
    <>
      <div className="icon-wrap" onClick={() => setOpen(true)}>
        <Tooltip title="Notes">
          <NoteAddOutlinedIcon />
        </Tooltip>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="notes-modal">
          <TextareaAutosize
            className="notes-text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <div
            className="button-light"
            onClick={() => {
              saveNote;
              setOpen(false);
            }}
          >
            SAVE NOTE
          </div>
        </div>
      </Modal>
    </>
  );
};

export const RemoveFromListIcon: React.FC<{ removeItem: any }> = ({
  removeItem,
}) => {
  return (
    <div className="icon-wrap" onClick={removeItem}>
      <Tooltip title="Remove from list">
        <RemoveCircleOutlineOutlinedIcon />
      </Tooltip>
    </div>
  );
};
