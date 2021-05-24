const uuid = require("uuid");

const lengthInUtf8Bytes = (str) => {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
};
class Storage {
  constructor() {
    this.event = {};
  }
  on(eventType, cb) {
    this.event[eventType] = cb;
  }
  getTableKeys() {
    const storage = window.localStorage;
    const tableEntries = storage.getItem("tableEntries");
    return tableEntries
      ? JSON.parse(tableEntries).filter((item) => item !== null)
      : [];
  }
  addTableKey(key) {
    const storage = window.localStorage;
    const keys = this.getTableKeys();
    keys.push(key);

    storage.setItem(
      "tableEntries",
      JSON.stringify(keys.filter((item) => item !== null))
    );
  }
  addTableItem(value) {
    const storage = window.localStorage;
    value.key = uuid.v4();
    value.lastUpdated = new Date().getTime();
    storage.setItem(value.key, JSON.stringify(value));
    this.addTableKey(value.key);
    if (this.event["data"] !== undefined) {
      this.event["data"]("create");
    }
  }
  updateTableItem(value) {
    const storage = window.localStorage;
    value.lastUpdated = new Date().getTime();
    storage.setItem(value.key, JSON.stringify(value));
    console.log("updateTableItem:", this.event);
    if (this.event["data"] !== undefined) {
      this.event["data"]("update");
    }
  }
  removeTableItem(item) {
    const storage = window.localStorage;
    const keys = this.getTableKeys();
    storage.setItem(
      "tableEntries",
      JSON.stringify(keys.filter((key) => key !== item.key))
    );
    storage.removeItem(item.key);
    if (this.event["data"] !== undefined) {
      this.event["data"]("delete");
    }
  }
  getTable() {
    console.log("getTable");
    const storage = window.localStorage;
    const keys = this.getTableKeys();
    const table = [];
    keys.forEach((key) => {
      if (key) {
        const value = storage.getItem(key);
        if (value) {
          table.push(JSON.parse(value));
        }
      }
    });
    if (this.event["data"] !== undefined) {
      this.event["data"]("read");
    }
    return table;
  }
}

export default Storage;
