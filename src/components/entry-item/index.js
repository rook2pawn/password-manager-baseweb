import React, { useState, useRef, useEffect } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Slider } from "baseui/slider";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

import { Checkbox } from "baseui/checkbox";
import { ProgressBar } from "baseui/progress-bar";
import { Accordion, Panel } from "baseui/accordion";
import { generate as generatePassword } from "generate-password";
import zxcvbn from "zxcvbn";
import copy from "copy-to-clipboard";

const MAXLENGTH = 64;
const MINLENGTH = 4;

const ButtonOverrides = {
  BaseButton: {
    style: {
      marginTop: "5px",
      width: "100%",
    },
  },
};

const validateTitle = (title) => {
  return title && title.length > 3;
};
const validateUsername = (username) => {
  return username && username.length > 3;
};
const validatePassword = (password) => {
  return password && password.length > 3;
};
const validateURL = (url) => {
  return url && /https?:\/\//.test(url);
};

const defaultEntryData = {
  username: "rook2pawn",
  title: "sampleTitle",
  url: "https://foo.com",
};
const EntryItem = (
  { isNewEntry = true, entryData = { ...defaultEntryData } },
  ref
) => {
  const [username, setUsername] = useState(entryData.username);
  const [validStates, setValidStates] = React.useState({
    username: false,
    isVisitedUsername: false,
    url: false,
    isVisitedUrl: false,
    title: false,
    isVisitedTitle: false,
    password: false,
    isVisitedPassword: false,
  });
  const [title, setTitle] = useState(entryData.title);
  const [url, setUrl] = useState(entryData.url);

  const [length, setLength] = useState(~~(MAXLENGTH / 2));
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState(null);
  const [temporaryPassword, setTemporaryPassword] = React.useState("");
  const [password, setPassword] = React.useState("adsfsfd");

  React.useImperativeHandle(ref, () => ({
    getEntry: () => {
      return { title, url, password, username };
    },
  }));

  const copyToClipboard = () => {
    copy(temporaryPassword);
    setCopied(true);
  };

  const setNewPassword = (p) => {
    const newPassword =
      typeof p === "string"
        ? p
        : generatePassword({ length, numbers, uppercase, symbols });

    const obj = zxcvbn(newPassword);
    setStrength(obj.score);
    setCopied(false);
    setTemporaryPassword(newPassword);
  };

  useEffect(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers]);

  const textStrength = {
    0: "Weak",
    1: "Average",
    2: "Medium",
    3: "Strong",
    4: "Strongest",
  };
  return (
    <Card
      overrides={{
        Root: {
          style: {
            padding: 0,
            width: "100%",
            boxSizing: "border-box",
            border: "none",
          },
        },
      }}
    >
      <fieldset>
        <legend>{isNewEntry ? "Add new entry" : "Edit existing entry"}</legend>
        <FormControl
          error={
            !validStates.title && validStates.isVisitedTitle
              ? "Enter valid title"
              : null
          }
          label={() => "Title"}
          caption={() => "Title of entry"}
        >
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setValidStates({
                ...validStates,
                title: validateTitle(e.target.value),
                isVisitedTitle: e.target.value ? true : false,
              });
            }}
            placeholder={"Enter title"}
            type="text"
            clearable
            clearOnEscape
          />
        </FormControl>

        <FormControl
          label={() => "Username"}
          error={
            !validStates.username && validStates.isVisitedUsername
              ? "Enter valid username"
              : null
          }
          caption={() => "Username for this entry"}
        >
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setValidStates({
                ...validStates,
                username: validateUsername(e.target.value),
                isVisitedUsername: e.target.value ? true : false,
              });
            }}
            placeholder={"Enter username"}
            type="text"
            clearable
            clearOnEscape
          />
        </FormControl>
        <FormControl
          label={() => "Password"}
          caption={() => "Password for this entry"}
          error={
            !validStates.password && validStates.isVisitedPassword
              ? "Enter valid password"
              : null
          }
        >
          <Input
            value={password}
            placeholder={"Enter password"}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidStates({
                ...validStates,
                password: validatePassword(e.target.value),
                isVisitedPassword: e.target.value ? true : false,
              });
            }}
            type="password"
            clearable
            clearOnEscape
          />
        </FormControl>

        <Accordion>
          <Panel title="Generate a password">
            <FormControl
              label={() => "Password"}
              caption={() => "Choose a strong password"}
            >
              <Input
                value={temporaryPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                clearable
                clearOnEscape
              />
            </FormControl>
            <Button onClick={copyToClipboard} overrides={ButtonOverrides}>
              {!copied ? "Copy to clipboard" : "Copied!"}
            </Button>
            <Button
              onClick={(e) => {
                setPassword(temporaryPassword);
              }}
              overrides={ButtonOverrides}
            >
              Use this password
            </Button>

            <div>
              <ProgressBar value={strength} successValue={4} />
              <span
                style={{
                  fontSize: "10px",
                  color: "#545454",
                  fontFamily: "sans-serif",
                }}
              >
                Strength: {textStrength[strength]}
              </span>
            </div>

            <Slider
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    paddingTop: "50px",
                  }),
                },
              }}
              min={MINLENGTH}
              max={MAXLENGTH}
              value={[length]}
              onChange={({ value }) => setLength(value[0])}
            />
            <FormControl label="Characters">
              <div>
                <Checkbox
                  checked={uppercase}
                  onChange={() => setUppercase(!uppercase)}
                >
                  A-Z
                </Checkbox>
                <Checkbox
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
                >
                  0-9
                </Checkbox>
                <Checkbox
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                >
                  %@#
                </Checkbox>
              </div>
            </FormControl>
          </Panel>
        </Accordion>
        <FormControl
          error={
            !validStates.url && validStates.isVisitedUrl
              ? "Enter valid URL"
              : null
          }
          label={() => "URL"}
          caption={() => "URL of entry"}
        >
          <Input
            placeholder={"Enter url link"}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setValidStates({
                ...validStates,
                url: validateURL(e.target.value),
                isVisitedUrl: e.target.value ? true : false,
              });
            }}
            type="text"
            clearable
            clearOnEscape
          />
        </FormControl>
      </fieldset>
    </Card>
  );
};

export default React.forwardRef(EntryItem);
