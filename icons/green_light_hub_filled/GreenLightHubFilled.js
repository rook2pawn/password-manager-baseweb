import * as React from "react";

function SvgGreenLightHubFilled(props) {
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
        d="M13 9H9v12.3l-7-3.8v-11L12 1l1 .5V9zm2 6V2.6l7 3.9v11L12 23l-1-.6V15h4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGreenLightHubFilled;
