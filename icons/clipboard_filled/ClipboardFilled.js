import * as React from "react";

function SvgClipboardFilled(props) {
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
        d="M8 1h8v5H8V1zm13 22V3h-3v5H6V3H3v20h18z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardFilled;
