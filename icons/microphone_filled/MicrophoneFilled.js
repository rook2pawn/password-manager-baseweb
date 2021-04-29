import * as React from "react";

function SvgMicrophoneFilled(props) {
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
        d="M5 8c0-3.9 3.1-7 7-7s7 3.1 7 7H5zm5.5 12v-3.2c-2.8-.6-5-2.9-5.4-5.8h13.8c-.4 2.9-2.6 5.2-5.4 5.8V20H17v3H7v-3h3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMicrophoneFilled;
