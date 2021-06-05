import React from "react";

import TableEntries from "../table/entries";
import AddEntryItem from "../add-entry-item";
import ViewEntryItem from "../view-entry-item";
import Plus from "baseui/icon/plus";
import { Button, KIND as ButtonKind } from "baseui/button";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { toaster } from "baseui/toast";
const Workshop = ({ storage }) => {
  const [table, setTable] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [mode, setMode] = React.useState("edit"); // edit/view/add
  const [activeEntry, setActiveEntry] = React.useState();

  const saveEntry = (entry) => {
    storage.addTableItem(entry);
    setTable(storage.getTable());
    return Promise.resolve();
  };
  const updateEntry = (entry) => {
    storage.updateTableItem(entry);
    setTable(storage.getTable());
    return Promise.resolve();
  };
  const modalClose = () => {
    setActiveEntry();
    setIsOpen(false);
  };

  React.useEffect(() => {
    setTable(storage.getTable());
  }, []);

  const [onDeleteConfirm, setOnDeleteConfirm] = React.useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "80%" }}>
        <TableEntries
          table={table}
          onView={({ idx, item }) => {
            setActiveEntry(item);
            setMode("view");
            setIsOpen(true);
          }}
          onRemove={({ idx, item }) => {
            setMode("deleteConfirm");
            setIsOpen(true);
            setOnDeleteConfirm(() => () => {
              storage.removeTableItem(item);
              setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
              toaster.positive("Removed password entry.");
              setIsOpen(false);
              setMode("");
              setActiveEntry();
            });
          }}
          onEdit={({ idx, item }) => {
            setActiveEntry(item);
            setMode("edit");
            setIsOpen(true);
          }}
        />
        <Button
          onClick={() => {
            setMode("add");
            setIsOpen(true);
            setActiveEntry();
          }}
          startEnhancer={() => <Plus size={24} />}
        >
          Add entry
        </Button>
        {isOpen && (
          <Modal
            onClose={modalClose}
            closeable={
              mode === "edit" || mode === "add" || mode === "deleteConfirm"
                ? false
                : true
            }
            isOpen={isOpen}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.alertdialog}
            overrides={{
              Dialog: {
                style: {
                  width: mode === "view" ? "800px" : "600px",
                  boxSizing: "border-box",
                },
              },
            }}
          >
            {mode === "deleteConfirm" && (
              <React.Fragment>
                <ModalHeader>Delete Confirm</ModalHeader>
                <ModalBody>
                  Please confirm that you want to delete this entry
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={modalClose} kind={ButtonKind.tertiary}>
                    Cancel
                  </ModalButton>
                  <ModalButton
                    onClick={() => {
                      onDeleteConfirm();
                    }}
                  >
                    Okay
                  </ModalButton>
                </ModalFooter>
              </React.Fragment>
            )}
            {(mode === "edit" || mode === "add") && (
              <AddEntryItem
                onCancelClick={modalClose}
                onSaveClick={(entry) => {
                  return new Promise((resolve, reject) => {
                    console.log("onSaveClick mode:", mode);
                    if (mode === "edit") {
                      updateEntry(entry).then(() => {
                        return resolve();
                      });
                    }
                    if (mode === "add") {
                      saveEntry(entry).then(() => {
                        return resolve();
                      });
                    }
                  })
                    .then(() => {
                      toaster.positive("Entry updated successful.");
                      modalClose();
                    })
                    .catch((e) => {
                      toaster.negative("Did not update.");
                      modalClose();
                      4;
                    });
                }}
                entryData={activeEntry}
                $style={{ width: "100%" }}
                mode={mode}
              />
            )}
            {mode === "view" && (
              <ViewEntryItem
                onCancelClick={modalClose}
                onSaveClick={(entry) => {
                  return new Promise((resolve, reject) => {
                    updateEntry(entry).then(() => {
                      return resolve();
                    });
                  })
                    .then(() => {
                      toaster.positive("Entry updated successful.");
                      modalClose();
                    })
                    .catch((e) => {
                      toaster.negative("Did not update.");
                      modalClose();
                    });
                }}
                entryData={activeEntry}
                $style={{ width: "100%" }}
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Workshop;
