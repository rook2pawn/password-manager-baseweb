import * as React from "react";

function SvgGridOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1v21h22V1H1zm3 9h6.5v3H4v-3zm9.5 0H20v3h-6.5v-3zM20 7h-6.5V4H20v3zm-9.5-3v3H4V4h6.5zM4 16h6.5v3H4v-3zm9.5 3v-3H20v3h-6.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGridOutlined;
