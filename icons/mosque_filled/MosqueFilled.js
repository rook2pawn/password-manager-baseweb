import * as React from "react";

function SvgMosqueFilled(props) {
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
        d="M15.023 5.008l4.03-4.031 4.031 4.03-4.03 4.031-4.03-4.03zM12 1c-1.2 1.4-2 3.2-2 5.2 0 4.3 3.5 7.8 7.8 7.8 2 0 3.8-.7 5.2-2-.3 5.5-4.9 10-10.5 10C6.7 22 2 17.3 2 11.5 2 5.8 6.4 1.2 12 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMosqueFilled;
