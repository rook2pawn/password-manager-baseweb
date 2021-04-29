import * as React from "react";

function SvgLightBulbFilled(props) {
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
        d="M19.4 12c.4-.9.6-2 .6-3 0-4.4-3.6-8-8-8S4 4.6 4 9c0 1.1.2 2.1.6 3l1.6 4h11.6l1.6-4zM15 23l1.6-4H7.4L9 23h6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightBulbFilled;
