import * as React from "react";

function SvgFreightFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1v22h22V1H1zm18.5 8v1.3L8 15H4.5v-1.3L16 9h3.5zm.5 11H4v-2h16v2zM4 6V4h16v2H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFreightFilled;
