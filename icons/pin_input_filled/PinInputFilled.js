import * as React from "react";

function SvgPinInputFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 10H9v3h6v-3z" fill="currentColor" />
      {","}
      <path d="M24 10h-6v3h6v-3z" fill="currentColor" />
      {","}
      <path d="M6 10H0v3h6v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgPinInputFilled;
