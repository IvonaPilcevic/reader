import React from "react";
import { Input } from "@material-ui/core";

interface Props {
  listName: string;
  listNameChangeHandler: any;
  addNewList: any;
}
export const AddNewListForm: React.FC<Props> = ({
  listName,
  listNameChangeHandler,
  addNewList,
}) => {
  return (
    <div style={{ marginTop: "20px", paddingLeft: "30px" }}>
      <Input
        type="text"
        placeholder="List name"
        value={listName}
        onChange={listNameChangeHandler}
      />
      <div
        className="button-light"
        style={{ display: "inline-block", marginLeft: "20px" }}
        onClick={addNewList}
      >
        ADD LIST +
      </div>
    </div>
  );
};
