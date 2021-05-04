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
            margin: 0,
            padding: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "10px",
            }}
          >
            <Title />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "80%" }}>
              <TableEntries
                table={table}
                onRemove={({ idx, item }) => {
                  storage.removeTableItem(item);
                  setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
                  toaster.positive("Removed password entry.");
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <AddEntryUI
                saveEntry={(entry) => {
                  storage.addTableItem(entry);
                  setTable(storage.getTable());
                  return Promise.resolve();
                }}
              />
            </div>
          </div>
        </div>
      </ToasterContainer>
    </ProviderWrapper>
  );
};
