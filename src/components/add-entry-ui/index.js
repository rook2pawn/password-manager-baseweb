import * as React from "react";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import AddEntryItem from "../add-entry-item";
import { StatefulPopover } from "baseui/popover";
import { toaster } from "baseui/toast";

const noop = () => Promise.resolve();

const AddEntryUI = ({ saveEntry = noop }, ref) => {
  const itemRef = React.useRef();
  return (
    <React.Fragment>
      <StatefulPopover
        showArrow={true}
        content={({ close }) => (
          <AddEntryItem
            ref={itemRef}
            onCancelClick={() => {
              close();
            }}
            onSaveClick={() => {
              return new Promise((resolve, reject) => {
                const x = itemRef.current.getEntry();
                saveEntry(x).then(() => {
                  return resolve();
                });
              })
                .then(() => {
                  toaster.positive("Password save successful.");
                  close();
                })
                .catch((e) => {
                  toaster.negative("Did not save.");
                });
            }}
          />
        )}
      >
        <Button onClick={() => {}} startEnhancer={() => <Plus size={24} />}>
          Add a new password entry
        </Button>
      </StatefulPopover>
    </React.Fragment>
  );
};

export default React.forwardRef(AddEntryUI);
