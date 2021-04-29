// @flow
import React from "react";

import { styled } from "fusion-plugin-styletron-react";
import { BaseProvider, LightTheme } from "baseui";
import { Layer } from "baseui/layer";

import TableEntries from "../components/table-entries";
import ActionBar from "../components/action-bar";
import AddEntryUI from "../components/add-entry-ui";

const Home = () => {
  const [value, setValue] = React.useState([10]);

  return (
    <div>
      <TableEntries />
      <AddEntryUI />
      <ActionBar />
    </div>
  );
};

export default Home;
