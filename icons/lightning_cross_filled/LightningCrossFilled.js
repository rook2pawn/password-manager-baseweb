import * as React from "react";

function SvgLightningCrossFilled(props) {
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
        d="M19 9L9 24v-9H1L11 0v9h8zm3 7l2 2-2 2 2 2-2 2-2-2-2 2-2-2 2-2-2-2 2-2 2 2 2-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightningCrossFilled;
