import * as React from "react";
import { Button, KIND as ButtonKIND } from "baseui/button";
import Plus from "baseui/icon/plus";
import AddEntryItem from "../add-entry-item";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { toaster } from "baseui/toast";

const noop = () => Promise.resolve();

const AddEntryUI = ({ saveEntry = noop }, ref) => {
  return (
    <React.Fragment>
      <StatefulPopover
        placement={PLACEMENT.left}
        content={({ close }) => (
          <AddEntryItem
            $style={{ width: "600px" }}
            onCancelClick={() => {
              close();
            }}
            onSaveClick={(entry) => {
              return new Promise((resolve, reject) => {
                saveEntry(entry).then(() => {
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
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({}),
            },
          }}
          onClick={() => {}}
          startEnhancer={() => <Plus size={24} />}
        >
          Add a new password entry
        </Button>
      </StatefulPopover>
    </React.Fragment>
  );
};

export default React.forwardRef(AddEntryUI);
