import React from "react";

import AddEntryUI from "./index";
import ProviderWrapper from "../provider-wrapper";

export const AddEntry = () => (
  <ProviderWrapper>
    <AddEntryUI />
  </ProviderWrapper>
);

export default {
  title: "Components/AddEntryUI",
};
