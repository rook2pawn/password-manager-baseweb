import React from "react";
import ProviderWrapper from "../provider-wrapper/storybook";

import { Primary } from "./index";
const storage = require("../storageWidgets/localstorage/localstorage.js");
export const MainApp = () => {
  return (
    <ProviderWrapper>
      <Primary storage={storage} />
    </ProviderWrapper>
  );
};

export default {
  title: "Main/App",
};
