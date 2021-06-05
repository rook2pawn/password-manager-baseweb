import * as React from "react";
import { Row, Cell } from "./child-components";
import { Button, KIND } from "baseui/button";
import Show from "baseui/icon/show";
import DeleteAlt from "baseui/icon/delete-alt";
const noop = () => Promise.resolve();
import { assetUrl } from "fusion-core";

export default ({
  idx = 0,
  title = "Ebay",
  username = "foo@bar.com",
  url = "https://ebay.com",
  lastUpdated,
  onRemove = noop,
  onView = noop,
  onEdit = noop,
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
        <Cell>{lastUpdated ? new Date(lastUpdated).toString() : ""}</Cell>
      </Row>
      <Button
        style={{ marginLeft: "10px", width: "100px" }}
        kind={KIND.secondary}
        onClick={onView}
      >
        <Show />
        <span style={{ marginLeft: "5px" }}>View</span>
      </Button>

      <Button
        style={{ marginLeft: "10px", width: "100px" }}
        kind={KIND.secondary}
        onClick={onEdit}
      >
        <img
          src={assetUrl("../../../../src/static/edit.png")}
          width={16}
          height={16}
        />
        <span>Edit</span>
      </Button>

      <Button
        style={{ marginLeft: "10px", width: "100px" }}
        kind={KIND.secondary}
        onClick={onRemove}
      >
        <DeleteAlt />
        <span>Delete</span>
      </Button>
    </div>
  );
};
