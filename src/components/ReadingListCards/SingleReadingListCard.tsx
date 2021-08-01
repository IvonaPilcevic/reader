import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Tooltip, ListItem } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import StarBorder from "@material-ui/icons/StarBorder";
import { RemoveFromListIcon } from "../BookList/ListIcons";

interface Props {
  listName: string;
  removeList: any;
  readingList: any[];
  removeItemFromList: any;
}

export const SingleReadingListCard: React.FC<Props> = ({
  listName,
  removeList,
  readingList,
  removeItemFromList,
}) => {
  return (
    <Card key={listName} style={{ marginBottom: "20px" }}>
      <CardContent>
        <Tooltip title="Delete list">
          <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={removeList}
          >
            <ClearIcon color="disabled" />
          </div>
        </Tooltip>
        <h3>
          {listName} ({readingList?.length})
        </h3>

        <div>
          {readingList?.map((item: any) => (
            <div key={item?.id}>
              <ListItem key={item?.id}>
                <StarBorder color="disabled" /> &nbsp; &nbsp;
                {item?.title}, {item?.author}, ({item?.year}) &nbsp;
                <RemoveFromListIcon
                  removeItem={() => removeItemFromList(item?.id, listName)}
                />
              </ListItem>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
