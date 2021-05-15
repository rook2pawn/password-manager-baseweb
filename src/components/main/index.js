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
                setIsOpen(true);
              }}
              onRemove={({ idx, item }) => {
                console.log("Going to storage.removeTableItem:", item);
                storage.removeTableItem(item);
                console.log("Done calling storage remove:", storage);
                setTable([...table.slice(0, idx), ...table.slice(idx + 1)]);
                toaster.positive("Removed password entry.");
              }}
            />
            <Modal
              onClose={() => setIsOpen(false)}
              closeable
              isOpen={isOpen}
              animate
              autoFocus
              size={SIZE.default}
              role={ROLE.dialog}
              overrides={{
                Dialog: {
                  style: {
                    width: "600px",
                    border: "none",
                  },
                },
              }}
            >
              <ModalBody style={{ flex: "1 1 0", border: "none" }}>
                <AddEntryItem isNewEntry={false} />
              </ModalBody>
            </Modal>
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
            <AddEntryUI
              saveEntry={(entry) => {
                storage.addTableItem(entry);
                setTable(storage.getTable());
                return Promise.resolve();
              }}
            />
            <div>Helo</div>
          </div>
        </div>
      </div>
    </ToasterContainer>
  );
};
