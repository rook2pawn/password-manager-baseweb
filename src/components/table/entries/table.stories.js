import React from "react";

import Table from "./index";
import ProviderWrapper from "../provider-wrapper/storybook";

export const TableEntry = () => (
  <ProviderWrapper>
    <Table />
  </ProviderWrapper>
);

export default {
  title: "Components/TableEntries",
};
