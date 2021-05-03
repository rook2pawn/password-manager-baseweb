import React from "react";

import Title from "../title";
import TableEntries from "../table-entries";
import AddEntryUI from "../add-entry-ui";
import ProviderWrapper from "../provider-wrapper";
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";

const storage = require("./localstorage");

export const Primary = () => {
  const [table, setTable] = React.useState(storage.getTable());
  return (
    <ProviderWrapper>
      <ToasterContainer placement={PLACEMENT.topRight} autoHideDuration={1500}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "thin solid red",
            height: "80vh",
          }}
        >
          <Title />
          <TableEntries
            table={table}
            onRemove={({ idx, item }) => {
              storage.removeTableItem(item);
              setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
              toaster.positive("Removed password entry.");
            }}
          />
          <div style={{ display: "flex" }}>
            <AddEntryUI
              saveEntry={(entry) => {
                storage.addTableItem(entry);
                setTable(storage.getTable());
                return Promise.resolve();
              }}
            />
          </div>
        </div>
      </ToasterContainer>
    </ProviderWrapper>
  );
};
export default {
  title: "Main",
};
