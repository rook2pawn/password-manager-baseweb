// @flow
import React from "react";

import { styled } from "fusion-plugin-styletron-react";
import PasswordEntry from "../components/password-entry";

import TableEntries from "../components/table-entries";

const Home = () => {
  const [value, setValue] = React.useState([10]);

  return (
    <div>
      <h2>Password Manager</h2>
      <PasswordEntry />
      <TableEntries />
    </div>
  );
};

export default Home;
