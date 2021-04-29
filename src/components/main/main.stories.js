import React from "react";

import TableEntries from "../table-entries";
import AddEntryUI from "../add-entry-ui";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { StatefulInput } from "baseui/input";
const engine = new Styletron();

export const Primary = () => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <div>
        <TableEntries />
        <AddEntryUI />
      </div>
    </BaseProvider>
  </StyletronProvider>
);

export default {
  title: "Main",
};
