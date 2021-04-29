import * as React from "react";

function SvgClocheFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 15v-1c0-4.8-3.4-8.9-8-9.8V3c0-1.1-.9-2-2-2s-2 .9-2 2v1.2c-4.6.9-8 5-8 9.8v1H0v3h24v-3h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClocheFilled;
