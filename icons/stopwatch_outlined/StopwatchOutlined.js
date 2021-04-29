import * as React from "react";

function SvgStopwatchOutlined(props) {
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
        d="M9 1h6v3H9V1zm3 3c5.2 0 9.5 4.3 9.5 9.5S17.2 23 12 23s-9.5-4.3-9.5-9.5S6.8 4 12 4zm-6.5 9.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-1.2-.4-2.4-1-3.4L13 14.6l-2.1-2.1L15.4 8c-1-.6-2.2-1-3.4-1-3.6 0-6.5 2.9-6.5 6.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStopwatchOutlined;
