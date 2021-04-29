import * as React from "react";

function SvgPinFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.1 13.9l3.4-3.4-.5-.5h-3l-5-5V1l-.5-.5-10 10 .5.5h4l5 5v3l.5.5 3.4-3.4 6 5.9H22v-2.1l-5.9-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinFilled;
