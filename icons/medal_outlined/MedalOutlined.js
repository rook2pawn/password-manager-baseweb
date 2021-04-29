import * as React from "react";

function SvgMedalOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 9l8-8h-6l-5 5-5-5H1l8 8h6z" fill="currentColor" />
      {","}
      <path
        d="M6 13.5v6l6 3.5 6-3.5v-6L12 10l-6 3.5zm3 4.51v-3.02l3-1.75 3 1.75v3.02l-3 1.75-3-1.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedalOutlined;
