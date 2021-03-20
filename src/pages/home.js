// @flow
import React from "react";

import { styled } from "fusion-plugin-styletron-react";

import TableEntries from "../components/table-entries";
import ActionBar from "../components/action-bar";

const Home = () => {
  const [value, setValue] = React.useState([10]);

  return (
    <div>
      <h2>Password Manager</h2>
      <TableEntries />
      <ActionBar />
    </div>
  );
};

export default Home;
