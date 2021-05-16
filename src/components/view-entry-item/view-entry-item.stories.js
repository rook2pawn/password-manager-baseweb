import React from "react";

import ViewItem from "./index";
import ProviderWrapper from "../provider-wrapper/storybook";

export const ViewEntryItem = () => (
  <ProviderWrapper>
    <ViewItem />
  </ProviderWrapper>
);

export default {
  title: "Components/View",
};
