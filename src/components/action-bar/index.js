import * as React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { ChevronDown, Delete, Overflow, Upload, Menu } from "baseui/icon";

export default () => {
  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: "View", active: true },
    { icon: Upload, label: "Add" },
    { icon: Menu, label: "Configure" },
  ]);
  return (
    <AppNavBar
      title="Password Manager"
      mainItems={mainItems}
      onMainItemSelect={(item) => {
        setMainItems((prev) => setItemActive(prev, item));
      }}
      username="Umka Marshmallow"
      usernameSubtitle="5 Stars"
      userItems={[
        { icon: Overflow, label: "User A" },
        { icon: Overflow, label: "User B" },
      ]}
      onUserItemSelect={(item) => console.log(item)}
    />
  );
};
