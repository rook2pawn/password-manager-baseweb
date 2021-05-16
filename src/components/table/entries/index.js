import * as React from "react";
import { Table, TableHeader, HeaderCell } from "./child-components";

import TableItem from "../item";
const noop = () => Promise.resolve();
export default ({
  table = [],
  onRemove = noop,
  onView = noop,
  onEdit = noop,
}) => {
  const EntryFields = ["Title", "Username", "URL", "Last Updated"];
  return (
    <Table>
      <div style={{ display: "flex", borderBottom: "thin solid #ccc" }}>
        <TableHeader>
          {EntryFields.map((field, idx) => (
            <HeaderCell key={idx}>{field}</HeaderCell>
          ))}
        </TableHeader>
        <div style={{ width: "240px" }}> </div>
      </div>
      {table.map((item, idx) => {
        return (
          <TableItem
            onView={() => {
              onView({ item: table[idx], idx });
            }}
            onRemove={() => {
              onRemove({ item: table[idx], idx });
            }}
            onEdit={() => {
              onEdit({ item: table[idx], idx });
            }}
            key={idx}
            idx={idx}
            username={item.username}
            url={item.url}
            title={item.title}
            lastUpdated={item.lastUpdated}
          />
        );
      })}
    </Table>
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
