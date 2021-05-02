import React from "react";

import AddEntryItem from "./index";
import ProviderWrapper from "../provider-wrapper";

export const AddEntry = () => (
  <ProviderWrapper>
    <AddEntryItem />
  </ProviderWrapper>
);

export default {
  title: "Components/AddEntryItem",
};
