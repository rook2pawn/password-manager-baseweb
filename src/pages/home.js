// @flow
import React from "react";

import { styled } from "fusion-plugin-styletron-react";
import PasswordEntry from "../components/password-entry";

const Home = () => {
  const [value, setValue] = React.useState([10]);

  return (
    <div>
      <h2>Password Manager</h2>
      <PasswordEntry />
    </div>
  );
};

export default Home;
