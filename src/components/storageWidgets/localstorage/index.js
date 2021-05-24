import React from "react";
import { BorderBox } from "../shared";
const LocalStorageWidget = ({ storage }) => {
  const [read, setRead] = React.useState(false);
  const [create, setCreate] = React.useState(false);
  const [del, setDel] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  React.useEffect(() => {
    storage.on("data", (type) => {
      console.log("data event:", type);
      switch (type) {
        case "read":
          setRead(true);
          setTimeout(() => {
            setRead(false);
          }, 1000);
          break;
        case "delete":
          setDel(true);
          setTimeout(() => {
            setDel(false);
          }, 1000);

          break;
        case "create":
          setCreate(true);
          setTimeout(() => {
            setCreate(false);
          }, 1000);

          break;
        case "update":
          setUpdate(true);
          setTimeout(() => {
            setUpdate(false);
          }, 1000);

          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <BorderBox>
      <span>LocalStorage</span>
      <span>Create:{create ? "TRUE" : "FALSE"}</span>
      <span>Read:{read ? "TRUE" : "FALSE"}</span>
      <span>Update:{update ? "TRUE" : "FALSE"}</span>
      <span>Delete:{del ? "TRUE" : "FALSE"}</span>
    </BorderBox>
  );
};

export default LocalStorageWidget;
