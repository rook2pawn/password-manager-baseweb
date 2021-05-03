import React from "react";

import TableEntries from "../table-entries";
import AddEntryUI from "../add-entry-ui";
import ProviderWrapper from "../provider-wrapper";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

const storage = require("./localstorage");

export const Primary = () => {
  const [table, setTable] = React.useState(storage.getTable());
  console.log("STORAGE GET TABLE:", storage.getTable());
  return (
    <ProviderWrapper>
      <ToasterContainer placement={PLACEMENT.topRight} autoHideDuration={5000}>
        <TableEntries table={table} />
        <AddEntryUI
          saveEntry={(entry) => {
            storage.addTableItem(entry);
            setTable(storage.getTable());
            return Promise.resolve();
          }}
        />
      </ToasterContainer>
    </ProviderWrapper>
  );
};
export default {
  title: "Main",
};
