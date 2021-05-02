import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
const engine = new Styletron();

const ProviderWrapper = (props) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>{props.children}</BaseProvider>
  </StyletronProvider>
);
export default ProviderWrapper;
