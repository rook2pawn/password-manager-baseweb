import * as React from "react";
import { Row, Cell } from "./child-components";

const noop = () => Promise.resolve();

export default ({
  idx = 0,
  title = "Ebay",
  username = "foo@bar.com",
  url = "https://ebay.com",
  onRemove = noop,
}) => {
  return (
    <Row key={`item_${idx}`} onClick={onRemove}>
      <Cell>{title}</Cell>
      <Cell>{username}</Cell>
      <Cell>
        <a href={url} target="_blank">
          {url}
        </a>
      </Cell>
    </Row>
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
