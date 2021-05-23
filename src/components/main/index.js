import React from "react";

import Title from "../title";
import Workshop from "../workshop";
import LocalStorageWidget from "../storageWidgets/localstorage";
import OnlineStorageWidget from "../storageWidgets/onlinestorage";
import ImportExportWidget from "../storageWidgets/importexport";
import { ToasterContainer, PLACEMENT } from "baseui/toast";

export const Primary = ({ storage }) => {
  return (
    <ToasterContainer placement={PLACEMENT.topRight} autoHideDuration={1500}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <Title />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LocalStorageWidget storage={storage} />
          <OnlineStorageWidget />
          <ImportExportWidget />
        </div>
        <Workshop storage={storage} />
      </div>
    </ToasterContainer>
  );
};
