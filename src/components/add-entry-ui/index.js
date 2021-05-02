import * as React from "react";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import AddEntryItem from "../add-entry-item";
import { StatefulPopover } from "baseui/popover";

export default () => {
  return (
    <React.Fragment>
      <StatefulPopover content={() => <AddEntryItem />}>
        <Button startEnhancer={() => <Plus size={24} />}>Add a row</Button>
      </StatefulPopover>
    </React.Fragment>
  );
};
