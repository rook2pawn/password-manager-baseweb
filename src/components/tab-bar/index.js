import * as React from "react";
import Plus from "baseui/icon/plus";
import { styled } from "fusion-plugin-styletron-react";
const Container = styled("div", {
  display: "flex",
  width: "100%",
  height: "50px",
  border: "thin solid red",
  justifyContent: "space-evenly",
});

export default () => {
  const [activeKey, setActiveKey] = React.useState("2");
  return (
    <Container>
      <Plus />
      <Plus />
      <Plus />
      <Plus />
    </Container>
  );
};
