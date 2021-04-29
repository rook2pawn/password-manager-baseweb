import * as React from "react";

function SvgSushiFilled(props) {
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
        d="M1 7.5C1 3.9 5.9 1 12 1s11 2.9 11 6.5v9c0 3.6-4.9 6.5-11 6.5S1 20.1 1 16.5v-9zm19 0C20 6 16.4 4 12 4 9 4 4 5.4 4 7.5 4 9 7.6 11 12 11c3 0 8-1.4 8-3.5zm-5.5 0c0 .828-1.12 1.5-2.5 1.5s-2.5-.672-2.5-1.5S10.62 6 12 6s2.5.672 2.5 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSushiFilled;
