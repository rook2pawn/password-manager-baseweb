import React from "react";

import TableEntries from "../table-entries";
import AddEntryUI from "../add-entry-ui";
import ProviderWrapper from "../provider-wrapper";

export const Primary = () => (
  <ProviderWrapper>
    <div>
      <TableEntries />
      <AddEntryUI />
    </div>
  </ProviderWrapper>
);

export default {
  title: "Main",
};
