import * as React from "react";

function SvgFlagFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 8l6-7H3v22h3v-8h17l-6-7z" fill="currentColor" />
    </svg>
  );
}

export default SvgFlagFilled;
