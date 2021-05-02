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

export default () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [length, setLength] = useState(~~(MAXLENGTH / 2));
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState(null);
  const [temporaryPassword, setTemporaryPassword] = React.useState("");
  const [password, setPassword] = React.useState("");

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
        Root: { style: { padding: 0, width: "100%", boxSizing: "border-box" } },
      }}
    >
      <fieldset>
        <legend>Edit entry</legend>
        <FormControl label={() => "Title"} caption={() => "Title of entry"}>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            clearable
            clearOnEscape
          />
        </FormControl>

        <FormControl
          label={() => "Username"}
          caption={() => "Username for this entry"}
        >
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            clearable
            clearOnEscape
          />
        </FormControl>
        <FormControl
          label={() => "Password"}
          caption={() => "Password for this entry"}
        >
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
            <Button overrides={ButtonOverrides}>Copy to clipboard</Button>
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
        <FormControl label={() => "URL"} caption={() => "URL of entry"}>
          <Input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
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
