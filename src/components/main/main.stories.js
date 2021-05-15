import React from "react";
import ProviderWrapper from "../provider-wrapper";

import { Primary } from "./index";

export const MainApp = () => {
  return (
    <ProviderWrapper>
      <Primary />
    </ProviderWrapper>
  );
};

export default {
  title: "Main/App",
};
