import * as React from "react";
import { styled } from "fusion-plugin-styletron-react";

export const Row = styled("div", {
  display: "flex",
  width: "100%",
  height: "48px",
  alignItems: "center",
  padding: "3px",
  justifyContent: "space-evenly",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  transition: "backgroundColor 0.25s",
  ":hover": {
    backgroundColor: "#CCC",
  },
});
export const Cell = styled("span", {
  flexGrow: 1,
  width: "33.3%",
  cursor: "inherit",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  boxSizing: "border-box",
});
