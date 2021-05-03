const uuid = require("uuid");

const getTableKeys = () => {
  const storage = window.localStorage;
  const tableEntries = storage.getItem("tableEntries");
  return tableEntries
    ? JSON.parse(tableEntries).filter((item) => item !== null)
    : [];
};
const addTableKey = (key) => {
  const storage = window.localStorage;
  const keys = getTableKeys();
  keys.push(key);

  storage.setItem(
    "tableEntries",
    JSON.stringify(keys.filter((item) => item !== null))
  );
};
const addTableItem = (value) => {
  const storage = window.localStorage;
  value.key = uuid.v4();
  storage.setItem(value.key, JSON.stringify(value));
  addTableKey(value.key);
};

const getTable = () => {
  const storage = window.localStorage;
  const keys = getTableKeys();
  const table = [];
  keys.forEach((key) => {
    if (key) {
      const value = storage.getItem(key);
      if (value) {
        table.push(JSON.parse(value));
      }
    }
  });
  return table;
};
exports.addTableItem = addTableItem;
exports.getTable = getTable;
