import * as React from "react";

function SvgCompassOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 5.5L1 23l17.5-4.5L23 1 5.5 5.5zm2 4.2l6.8 6.8-9.2 2.4 2.4-9.2zm9 4.6L9.7 7.5l9.2-2.4-2.4 9.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCompassOutlined;
