import * as React from "react";

function SvgTwoLinesOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 6h20v3H2V6z" fill="currentColor" />
      {","}
      <path d="M2 15h20v3H2v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgTwoLinesOutlined;
