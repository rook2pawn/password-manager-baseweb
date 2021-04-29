import * as React from "react";

function SvgPersonGroupFilled(props) {
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
        d="M16 6a4 4 0 11-8 0 4 4 0 018 0zm2 10v5H6v-5c0-.7.2-1.4.5-2 .7-1.2 2-2 3.5-2h4c1.5 0 2.8.8 3.5 2 .3.6.5 1.3.5 2zM1 18v3h3v-6.9c-1.7.5-3 2-3 3.9zm19-3.9V21h3v-3c0-1.9-1.3-3.4-3-3.9zM20 6c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM1 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonGroupFilled;
