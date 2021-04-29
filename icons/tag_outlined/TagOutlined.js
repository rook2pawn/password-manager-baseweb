import * as React from "react";

function SvgTagOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 5v5.8l-9 9-5.8-5.7 9-9H19V5zm3-3H12L0 14l10 10 12-12V2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTagOutlined;
