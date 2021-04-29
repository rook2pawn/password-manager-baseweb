import * as React from "react";
import { Card } from "baseui/card";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import {
  Table,
  TableHeader,
  HeaderCell,
  Row,
  Cell,
  EditWindow,
} from "./child-components";
import EditEntry from "../edit-entry";

export default () => {
  const INITIALROWS = [
    { title: "Ebay", username: "rook", url: "https://www.ebay.com" },
    { title: "Amazon", username: "rook", url: "https://smile.amazon.com" },
  ];
  const [rows, setRows] = React.useState(INITIALROWS);
  const [editing, setEditing] = React.useState(false);
  const addRowClick = () => {
    setRows([
      { title: "Reddit", username: "rook", url: "https://reddit.com" },
      ...rows,
    ]);
    setEditing(true);
  };
  const saveRowClick = () => {
    setEditing(false);
  };
  const cancelRowClick = () => {
    setEditing(false);
  };
  return (
    <Card>
      <Table>
        <TableHeader>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>username</HeaderCell>
          <HeaderCell>URL</HeaderCell>
        </TableHeader>
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
      </Table>
    </Card>
  );
};
