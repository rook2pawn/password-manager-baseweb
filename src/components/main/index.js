import React from "react";

import Title from "../title";
import TableEntries from "../table-entries";
import AddEntryItem from "../add-entry-item";
import ViewEntryItem from "../view-entry-item";
import Plus from "baseui/icon/plus";
import { Button } from "baseui/button";

import { Modal, SIZE, ROLE } from "baseui/modal";
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";

console.log("__BROWSER__:", __BROWSER__, " _NODE_:", __NODE__);
const storage = __BROWSER__
  ? require("./localstorage")
  : { getTable: () => {} };

export const Primary = () => {
  const [table, setTable] = React.useState(storage.getTable());
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "10px",
          }}
        >
          <Title />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "60%" }}>
            <TableEntries
              table={table}
              onView={({ idx, item }) => {
                setActiveEntry(item);
                setMode("view");
                setIsOpen(true);
              }}
              onRemove={({ idx, item }) => {
                storage.removeTableItem(item);
                setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
                toaster.positive("Removed password entry.");
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
              Add a new password entry
            </Button>
            {isOpen && (
              <Modal
                onClose={modalClose}
                closeable={mode === "edit" || mode === "add" ? false : true}
                isOpen={isOpen}
                animate
                autoFocus
                size={SIZE.default}
                role={ROLE.alertdialog}
                overrides={{
                  Dialog: {
                    style: {
                      width: mode === "view" ? "500px" : "600px",
                      boxSizing: "border-box",
                    },
                  },
                }}
              >
                {(mode === "edit" || mode === "add") && (
                  <AddEntryItem
                    onCancelClick={modalClose}
                    onSaveClick={(entry) => {
                      console.log("ENTRY ON SAVE CLICK:", entry);
                      return new Promise((resolve, reject) => {
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
                        });
                    }}
                    entryData={activeEntry}
                    $style={{ width: "600px" }}
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
                    $style={{ width: "500px" }}
                  />
                )}
              </Modal>
            )}
          </div>
        </div>
      </div>
    </ToasterContainer>
  );
};
