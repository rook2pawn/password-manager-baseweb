import * as React from "react";
import { Row, Cell } from "./child-components";
import { Button, KIND } from "baseui/button";

import Delete from "baseui/icon/delete";
import DeleteAlt from "baseui/icon/delete-alt";
const noop = () => Promise.resolve();
import { useStyletron } from "baseui";

export default ({
  idx = 0,
  title = "Ebay",
  username = "foo@bar.com",
  url = "https://ebay.com",
  onRemove = noop,
  onView = noop,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Row key={`item_${idx}`} onClick={onView}>
        <Cell>{title}</Cell>
        <Cell>{username}</Cell>
        <Cell>
          <a href={url} target="_blank">
            {url}
          </a>
        </Cell>
      </Row>
      <Button kind={KIND.secondary} onClick={onRemove}>
        <DeleteAlt />
      </Button>
    </div>
  );
};
/*
        {rows.map((row, idx) => {
          const { title, username, url } = row;
          const style =
            editing && idx === 0
              ? { background: "#ccc", cursor: "pointer" }
              : editing
              ? { cursor: "not-allowed", filter: "blur(2px)" }
              : { cursor: "pointer" };
          return (
            <Row key={`item_${idx}`} style={{ ...style }}>
              <Cell>{title}</Cell>
              <Cell>{username}</Cell>
              <Cell>
                <a href={url} target="_blank">
                  The {url}
                </a>
              </Cell>
            </Row>
          );
        })}
*/
