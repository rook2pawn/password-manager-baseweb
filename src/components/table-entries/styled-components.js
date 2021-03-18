import * as React from "react";
import { styled } from "fusion-plugin-styletron-react";

export const Table = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "14px",
});
export const TableHeader = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "thin solid #ccc",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  paddingTop: "5px",
  paddingBottom: "5px",
});

export const HeaderCell = styled("span", {
  flexGrow: 1,
  width: "33.3%",
  fontWeight: "bold",
  boxSizing: "border-box",
});
export const Row = styled("div", {
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
export const Cell = styled("span", {
  flexGrow: 1,
  width: "33.3%",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  cursor: "pointer",
  boxSizing: "border-box",
  borderLeft: "thin dotted #ccc",
});
