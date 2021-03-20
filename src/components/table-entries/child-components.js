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
  cursor: "inherit",
  fontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  boxSizing: "border-box",
  borderLeft: "thin dotted #ccc",
});

export const EditWindow = () => {
  return (
    <form>
      <fieldset>
        <legend>Personalia:</legend>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
};
