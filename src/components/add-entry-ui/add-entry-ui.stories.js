import React from "react";

import AddEntryUI from "./index";
import ProviderWrapper from "../provider-wrapper/storybook";

import { ToasterContainer } from "baseui/toast";

export const AddEntry = () => (
  <ProviderWrapper>
    <ToasterContainer autoHideDuration={5000}>
      <AddEntryUI />
    </ToasterContainer>
  </ProviderWrapper>
);

export default {
  title: "Components/AddEntryUI",
};
