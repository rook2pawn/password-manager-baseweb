import * as React from "react";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import EntryItem from "../entry-item";

const noop = () => Promise.resolve();
const AddEntryItem = ({
  onCancelClick = noop,
  onSaveClick = noop,
  isNewEntry = true,
  $style = {},
  entryData,
}) => {
  const [editing, setEditing] = React.useState(true);
  const itemRef = React.useRef();

  const saveClick = () => {
    const entry = itemRef.current.getEntry();
    return onSaveClick(entry);
  };
  const cancelClick = () => {
    return onCancelClick();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        ...$style,
      }}
    >
      <EntryItem ref={itemRef} isNewEntry={isNewEntry} entryData={entryData} />
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
              }),
            },
          }}
          disabled={!editing}
          startEnhancer={() => <Delete size={24} />}
          onClick={cancelClick}
        >
          Cancel
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: "50%",
              }),
            },
          }}
          disabled={!editing}
          startEnhancer={() => <Check size={24} />}
          onClick={saveClick}
        >
          Save row
        </Button>
      </div>
    </div>
  );
};

export default AddEntryItem;
