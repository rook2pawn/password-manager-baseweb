import * as React from "react";
import { styled } from "fusion-plugin-styletron-react";

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
  cursor: "inherit",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  boxSizing: "border-box",
  borderLeft: "thin dotted #ccc",
});
