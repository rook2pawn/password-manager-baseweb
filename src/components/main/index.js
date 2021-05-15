import React from "react";

import Title from "../title";
import TableEntries from "../table-entries";
import AddEntryUI from "../add-entry-ui";
import AddEntryItem from "../add-entry-item";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";

console.log("__BROWSER__:", __BROWSER__, " _NODE_:", __NODE__);
const storage = __BROWSER__
  ? require("./localstorage")
  : { getTable: () => {} };

export const Primary = () => {
  const [table, setTable] = React.useState(storage.getTable());
  const [isOpen, setIsOpen] = React.useState(false);
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
                setIsOpen(true);
              }}
              onRemove={({ idx, item }) => {
                storage.removeTableItem(item);
                setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
                toaster.positive("Removed password entry.");
              }}
            />
            {isOpen && (
              <Modal
                onClose={modalClose}
                closeable={false}
                isOpen={isOpen}
                animate
                autoFocus
                size={SIZE.default}
                role={ROLE.dialog}
                overrides={{
                  Dialog: {
                    style: {
                      width: "600px",
                      boxSizing: "border-box",
                    },
                  },
                }}
              >
                <AddEntryItem
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
                  $style={{ width: "600px" }}
                  isNewEntry={false}
                />
              </Modal>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              paddingLeft: "20px",
              paddingBottom: "20px",
            }}
          >
            <AddEntryUI saveEntry={saveEntry} />
          </div>
        </div>
      </div>
    </ToasterContainer>
  );
};
