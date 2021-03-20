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
        <Button
          disabled={editing}
          startEnhancer={() => <Plus size={24} />}
          onClick={addRowClick}
        >
          Add a row
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "5px",
          }}
        >
          <Button
            kind={ButtonKIND.secondary}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "45%",
                  boxSizing: "border-box",
                  borderWidth: "1px",
                  borderColor: "black",
                }),
              },
            }}
            disabled={!editing}
            startEnhancer={() => <Delete size={24} />}
            onClick={cancelRowClick}
          >
            Cancel
          </Button>
          <Button
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "45%",
                  boxSizing: "border-box",
                  borderWidth: "1px",
                  borderColor: "black",
                }),
              },
            }}
            disabled={!editing}
            startEnhancer={() => <Check size={24} />}
            onClick={saveRowClick}
          >
            Save row
          </Button>
        </div>
        {editing && (
          <div style={{ width: "50%" }}>
            <EditEntry />
          </div>
        )}
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
