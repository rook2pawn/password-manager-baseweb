import * as React from "react";

function SvgDoorOutlined(props) {
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
        d="M20 1v19h3v3H1v-3h3V1h16zM7 4v16h10V4H7zm2 5h3v5H9V9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDoorOutlined;
