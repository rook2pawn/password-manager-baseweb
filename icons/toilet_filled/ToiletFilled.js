import * as React from "react";

function SvgToiletFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 1H4v8h8V1z" fill="currentColor" />
      {","}
      <path
        d="M4 11v12h8v-3.02c3.62-.18 6.63-2.64 7.64-5.98H21v-3H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgToiletFilled;
