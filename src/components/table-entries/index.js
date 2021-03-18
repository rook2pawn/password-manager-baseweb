import * as React from "react";
import { styled } from "fusion-plugin-styletron-react";
import { useStyletron } from "baseui";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import Plus from "baseui/icon/plus";
const Table = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "14px",
});
const TableHeader = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "thin solid #ccc",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  paddingTop: "5px",
  paddingBottom: "5px",
});
const HeaderCell = styled("span", {
  flexGrow: 1,
  width: "33.3%",
  fontWeight: "bold",
  boxSizing: "border-box",
});
const Row = styled("div", {
  display: "flex",
  borderRight: "thin solid #ccc",
  borderBottom: "thin solid #ccc",
  justifyContent: "space-evenly",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  transition: "background 0.25s",
  ":hover": {
    background: "#CCC",
  },
});
const Cell = styled("span", {
  flexGrow: 1,
  width: "33.3%",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  cursor: "pointer",
  boxSizing: "border-box",
  borderLeft: "thin dotted #ccc",
});
const AddRow = styled("div", {
  display: "flex",
  cursor: "pointer",
  paddingTop: "5px",
  paddingBottom: "5px",
  borderBottom: "thin solid #ccc",
  justifyContent: "space-evenly",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  transition: "background 0.25s",
  ":hover": {
    background: "#CCC",
  },
});

const INITIALROWS = [
  { title: "Ebay", username: "rook", url: "https://www.ebay.com" },
  { title: "Amazon", username: "rook", url: "https://smile.amazon.com" },
];

export default () => {
  const [rows, setRows] = React.useState(INITIALROWS);
  const addRowClick = () => {
    setRows([
      ...rows,
      { title: "Reddit", username: "rook", url: "https://reddit.com" },
    ]);
  };

  /*
    React.useEffect(() => {
    },[])

    */

  return (
    <Card>
      <Table>
        <Button startEnhancer={() => <Plus size={24} />} onClick={addRowClick}>
          Add a row
        </Button>

        <TableHeader>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>username</HeaderCell>
          <HeaderCell>URL</HeaderCell>
        </TableHeader>
        {rows.map((row) => {
          const { title, username, url } = row;
          return (
            <Row>
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
