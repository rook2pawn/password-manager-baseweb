import * as React from "react";

function SvgConsoleOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1v22h22V1H1zm19 19H4V4h16v16z" fill="currentColor" />
      {","}
      <path
        d="M8.06 15.06l4.56-4.56-4.56-4.56-2.12 2.12 2.44 2.44-2.44 2.44 2.12 2.12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConsoleOutlined;
