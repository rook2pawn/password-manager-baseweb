import * as React from "react";

function SvgTrashCanFilled(props) {
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
        d="M16 1v2h5v3H3V3h5V1h8zM5 8h14v15H5V8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashCanFilled;
