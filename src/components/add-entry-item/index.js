import * as React from "react";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import EntryItem from "../entry-item";

const noop = () => Promise.resolve();
const AddEntryItem = ({
  onCancelClick = noop,
  onSaveClick = noop,
  mode = "edit",
  $style = {},
  entryData,
}) => {
  console.log("addEntryItem mode:", mode);
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
      <EntryItem mode={mode} ref={itemRef} entryData={entryData} />
      {(mode === "edit" || mode === "add") && (
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
            startEnhancer={() => <Check size={24} />}
            onClick={saveClick}
          >
            Save row
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddEntryItem;
