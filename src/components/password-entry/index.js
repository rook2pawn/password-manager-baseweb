import React, { useState, useRef, useEffect } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Slider } from "baseui/slider";
import { Checkbox } from "baseui/checkbox";
import { ProgressBar } from "baseui/progress-bar";
import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { generate as generatePassword } from "generate-password";
import zxcvbn from "zxcvbn";

const MAXLENGTH = 64;
const MINLENGTH = 4;

export default () => {
  const [length, setLength] = useState(~~(MAXLENGTH / 2));
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState(null);
  let [password, setPassword] = React.useState("");

  const setNewPassword = (p) => {
    const newPassword =
      typeof p === "string"
        ? p
        : generatePassword({ length, numbers, uppercase, symbols });

    const obj = zxcvbn(newPassword);
    setStrength(obj.score);
    setCopied(false);
    setPassword(newPassword);
  };

  useEffect(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers]);

  const textStrength = {
    0: "BAD",
    1: "WEAK",
    2: "BETTER",
    3: "STRONG",
    4: "STRONGEST",
  };
  return (
    <div>
      <FormControl
        label={() => "Password"}
        caption={() => "Choose a strong password"}
      >
        <Input
          value={password}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          type="password"
          clearable
          clearOnEscape
        />
      </FormControl>
      <div>
        <ProgressBar value={strength} successValue={4} />
        {textStrength[strength]}
      </div>

      <Slider
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
          <Checkbox checked={numbers} onChange={() => setNumbers(!numbers)}>
            0-9
          </Checkbox>
          <Checkbox checked={symbols} onChange={() => setSymbols(!symbols)}>
            %@#
          </Checkbox>
        </div>
      </FormControl>
    </div>
  );
};
