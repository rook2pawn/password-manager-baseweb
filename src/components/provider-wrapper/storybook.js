import React from "react";

import { Client as StyletronClient } from "styletron-engine-atomic";

import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

let engine = new StyletronClient();

const ProviderWrapper = (props) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{props.children}</BaseProvider>
    </StyletronProvider>
  );
};
export default ProviderWrapper;
