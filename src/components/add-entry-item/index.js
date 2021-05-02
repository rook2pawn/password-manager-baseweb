import * as React from "react";
import { Card } from "baseui/card";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import EditEntry from "../edit-entry";

const EntryItem = (props = {}) => {
  const [editing, setEditing] = React.useState(true);
  const saveRowClick = () => {
    setEditing(false);
  };
  const cancelRowClick = () => {
    setEditing(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
      }}
    >
      {editing && <EditEntry />}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50px",
        }}
      >
        <Button
          kind={ButtonKIND.secondary}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "50%",
                padding: "5px",
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
                width: "50%",
                padding: "5px",
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
    </div>
  );
};

export default EntryItem;
