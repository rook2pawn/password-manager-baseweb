import * as React from "react";

function SvgTreeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.7 11h2.8L12 0 4.5 11h2.8L2 19h8.5v3h3v-3H22l-5.3-8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTreeFilled;
