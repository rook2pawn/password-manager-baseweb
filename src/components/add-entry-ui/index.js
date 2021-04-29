import * as React from "react";
import { Card } from "baseui/card";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import EditEntry from "../edit-entry";
import { StatefulPopover } from "baseui/popover";

export default () => {
  const [editing, setEditing] = React.useState(false);
  const saveRowClick = () => {
    setEditing(false);
  };
  const cancelRowClick = () => {
    setEditing(false);
  };
  return (
    <React.Fragment>
      <EditEntry />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "5px",
        }}
      >
        <Button
          kind={ButtonKIND.secondary}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "45%",
              }),
            },
          }}
          disabled={!editing}
          startEnhancer={() => <Delete size={24} />}
          onClick={cancelRowClick}
        >
          Cancel
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "45%",
              }),
            },
          }}
          disabled={!editing}
          startEnhancer={() => <Check size={24} />}
          onClick={saveRowClick}
        >
          Save row
        </Button>
      </div>

      <StatefulPopover
        content={<div>hello world</div>}
        accessibilityType={"tooltip"}
      >
        <Button>Open</Button>
      </StatefulPopover>
      <StatefulPopover
        content={() => <div style={{ width: "600px" }}>HIIIII</div>}
      >
        <Button disabled={editing} startEnhancer={() => <Plus size={24} />}>
          Add a row
        </Button>
      </StatefulPopover>
    </React.Fragment>
  );
};
