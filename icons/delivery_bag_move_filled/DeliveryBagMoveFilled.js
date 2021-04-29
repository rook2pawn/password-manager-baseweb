import * as React from "react";

function SvgDeliveryBagMoveFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 3v5h2v8.75A4.25 4.25 0 0118.75 21h-6.5A4.25 4.25 0 018 16.75V8h2V3h11zm-3 3h-5v2h5V6z"
        />
        <path d="M6 8H0v3h6V8zM6 13H1v3h5v-3z" />
      </g>
    </svg>
  );
}

export default SvgDeliveryBagMoveFilled;
