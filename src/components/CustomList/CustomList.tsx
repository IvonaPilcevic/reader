import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Button } from "../Button";
import StarBorder from "@material-ui/icons/StarBorder";

interface Props {
  listName: string;
  items: any;
  hasButton?: boolean;
  buttonHref?: string;
  buttonText?: string;
  buttonVariant?: string;
  books?: boolean;
}

export const CustomList: React.FC<Props> = ({
  listName,
  items,
  hasButton = false,
  buttonHref = "/",
  buttonText = "",
  buttonVariant = "button-dark",
}) => {
  return (
    <div>
      <h1>{listName}</h1>
      <List>
        {items?.map((item: any) => (
          <ListItem key={item?.id}>
            <StarBorder color="disabled" /> &nbsp;
            <span>
              {item?.title}, {item?.author} ({item?.year})
            </span>
          </ListItem>
        ))}
      </List>
      {hasButton && (
        <Button href={buttonHref} text={buttonText} variant={buttonVariant} />
      )}
    </div>
  );
};
