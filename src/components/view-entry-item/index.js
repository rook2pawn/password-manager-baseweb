import React from "react";
import { FormControl } from "baseui/form-control";
import { Card } from "baseui/card";
import { Button } from "baseui/button";

import copy from "copy-to-clipboard";

const ButtonOverrides = {
  BaseButton: {
    style: {
      marginTop: "5px",
      width: "100%",
    },
  },
};

const defaultEntryData = {
  username: "rook2pawn",
  title: "sampleTitle",
  url: "https://foo.com",
  password: "",
  key: "",
};
const inputStyle = {
  fontSize: "16px",
  lineHeight: "24px",
  paddingBottom: "10px",
  paddingLeft: "14px",
  paddingRight: "14px",

  paddingTop: "10px",
};

const ViewEntryItem = ({ entryData = { ...defaultEntryData } }) => {
  const { username, password, url } = entryData;

  const [action, setAction] = React.useState("");

  const descriptionTitle = "View entry";
  return (
    <Card
      overrides={{
        Root: {
          style: {
            padding: 0,
            width: "100%",
            boxSizing: "border-box",
          },
        },
      }}
    >
      <div style={{ display: "flex" }}>
        <fieldset>
          <legend>{descriptionTitle}</legend>
          <FormControl
            label={() => "Username"}
            caption={() => "Username for this entry"}
          >
            <input style={inputStyle} readOnly value={username} type="text" />
          </FormControl>
          <FormControl
            label={() => "Password"}
            caption={() => "Password for this entry"}
          >
            <input
              style={inputStyle}
              readOnly
              value={password}
              type="password"
            />
          </FormControl>

          <FormControl label={() => "URL"} caption={() => "URL of entry"}>
            <input style={inputStyle} readOnly value={url} type="text" />
          </FormControl>
        </fieldset>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "60px",
            height: "280px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Button
              onClick={() => {
                copy(username);
                setAction("username");
              }}
            >
              <span>Copy username</span>
            </Button>
            {action === "username" && (
              <div style={{ position: "absolute", top: "45px", left: "10px" }}>
                Copied username
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Button
              onClick={() => {
                copy(password);
                setAction("password");
              }}
            >
              <span>Copy password</span>
            </Button>
            {action === "password" && (
              <div style={{ position: "absolute", top: "45px", left: "10px" }}>
                Copied password
              </div>
            )}
          </div>
          <Button $as="a" href={url} target="_blank">
            Open URL
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ViewEntryItem;
