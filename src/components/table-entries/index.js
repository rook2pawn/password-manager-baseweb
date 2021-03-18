import * as React from "react";
import { Card } from "baseui/card";
import { Button } from "baseui/button";
import Plus from "baseui/icon/plus";
import Check from "baseui/icon/check";
import { Table, TableHeader, HeaderCell, Row, Cell } from "./styled-components";

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
  return (
    <Card>
      <Table>
        <Button
          disabled={editing}
          startEnhancer={() => <Plus size={24} />}
          onClick={addRowClick}
        >
          Add a row
        </Button>
        <Button
          disabled={!editing}
          startEnhancer={() => <Check size={24} />}
          onClick={saveRowClick}
        >
          Save row
        </Button>
        <TableHeader>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>username</HeaderCell>
          <HeaderCell>URL</HeaderCell>
        </TableHeader>
        {rows.map((row, idx) => {
          const { title, username, url } = row;
          const style = editing && idx === 0 ? { background: "#ccc" } : {};
          return (
            <Row key={`item_${idx}`} style={{ ...style }}>
              <Cell>{title}</Cell>
              <Cell>{username}</Cell>
              <Cell>
                <a href={url} target="_blank">
                  {url}
                </a>
              </Cell>
            </Row>
          );
        })}
      </Table>
    </Card>
  );
};
