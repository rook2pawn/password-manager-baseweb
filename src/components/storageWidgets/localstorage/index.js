import React from "react";
import { BorderBox } from "../shared";
const LocalStorageWidget = ({ storage }) => {
  const [state, setState] = React.useState({
    read: false,
    create: false,
    update: false,
    delete: false,
  });
  console.log("LocalSTorageWidget being rerun");
  React.useEffect(() => {
    console.log("React USE EFFECT!!!");
    storage.on("data", (type) => {
      console.log("DATA:", type);
      switch (type) {
        case "read":
          setState({ ...state, read: true });
          break;
        case "delete":
          setState({ ...state, delete: true });
          break;
        case "create":
          setState({ ...state, create: true });
          break;
        case "update":
          setState({ ...state, update: true });
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <BorderBox>
      <span>LocalStorage</span>
      <span>Create:{state.create ? "TRUE" : "FALSE"}</span>
      <span>Read:{state.read ? "TRUE" : "FALSE"}</span>
      <span>Update:{state.update ? "TRUE" : "FALSE"}</span>
      <span>Delete:{state.delete ? "TRUE" : "FALSE"}</span>
    </BorderBox>
  );
};

export default LocalStorageWidget;
