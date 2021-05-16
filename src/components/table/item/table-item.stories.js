import React from "react";

import TableItem from "./index";
import ProviderWrapper from "../provider-wrapper/storybook";

export const TableEntry = () => (
  <ProviderWrapper>
    <TableItem />
  </ProviderWrapper>
);

export default {
  title: "Components/TableItem",
};
