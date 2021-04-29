import * as React from "react";

function SvgSeatbeltFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 9l-3-3V2.5L10.5 0 0 10.5 2.5 13H6l3 3h3l4-4V9zm-3 1.76L10.76 13h-.52l-1.45-1.45 2.76-2.76L13 10.24v.52z"
        fill="currentColor"
      />
      {","}
      <path
        d="M20.514 12.01l-8.5 8.5 3.487 3.486 8.499-8.5-3.486-3.486z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSeatbeltFilled;
