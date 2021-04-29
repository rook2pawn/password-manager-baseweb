import * as React from "react";

function SvgDashboardOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1v22h22V1H1zm19 7h-9V4h9v4zM8 4v4H4V4h4zm-4 7h9v9H4v-9zm12 9v-9h4v9h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDashboardOutlined;
