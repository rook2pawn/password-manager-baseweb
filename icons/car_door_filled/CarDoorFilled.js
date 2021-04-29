import * as React from "react";

function SvgCarDoorFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 3L1 9.5v3L5.2 21H23V3H7.5zm1.2 3H20v5H4v-.3L8.7 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarDoorFilled;
