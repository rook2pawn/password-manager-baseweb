import * as React from "react";

function SvgChevronUpFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 13.3v3.8L12 9.4 2 17.1v-3.8l10-7.7 10 7.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronUpFilled;
