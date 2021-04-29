import * as React from "react";

function SvgThreeLinesOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 3H1v3h22V3zm0 7H1v3h22v-3zM1 17h22v3H1v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThreeLinesOutlined;
