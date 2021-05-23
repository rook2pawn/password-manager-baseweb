import React from "react";
import { FormControl } from "baseui/form-control";
import { Card } from "baseui/card";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
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
  password: "abcdf",
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

const ViewEntryItem = ({
  entryData = { ...defaultEntryData },
  $style = {},
}) => {
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
            ...$style,
          },
        },
      }}
    >
      <div style={{ display: "flex" }}>
        <fieldset style={{ width: "100%" }}>
          <legend>{descriptionTitle}</legend>
          <FormControl
            label={() => "Username"}
            caption={() => action === "username" && "Copied username"}
          >
            <React.Fragment>
              <Input
                positive={action === "username"}
                style={inputStyle}
                readOnly
                value={username}
                type="text"
              />
              <Button
                onClick={() => {
                  copy(username);
                  setAction("username");
                }}
              >
                <span>Copy username</span>
              </Button>
            </React.Fragment>
          </FormControl>
          <FormControl
            label={() => "Password"}
            caption={() => action === "password" && "Copied password"}
          >
            <React.Fragment>
              <Input
                style={inputStyle}
                positive={action === "password"}
                readOnly
                value={password}
                type="password"
              />
              <Button
                onClick={() => {
                  copy(password);
                  setAction("password");
                }}
              >
                <span>Copy password</span>
              </Button>
            </React.Fragment>
          </FormControl>

          <FormControl label={() => "URL"}>
            <React.Fragment>
              <Input style={inputStyle} readOnly value={url} type="text" />
              <Button $as="a" href={url} target="_blank">
                Open URL
              </Button>
            </React.Fragment>
          </FormControl>
        </fieldset>
      </div>
    </Card>
  );
};

export default ViewEntryItem;
