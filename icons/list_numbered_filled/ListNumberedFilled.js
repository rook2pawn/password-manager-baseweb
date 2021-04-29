import * as React from "react";

function SvgListNumberedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 3H11v3h12V3z" fill="currentColor" />
      {","}
      <path d="M23 10H11v3h12v-3z" fill="currentColor" />
      {","}
      <path d="M23 17H11v3h12v-3z" fill="currentColor" />
      {","}
      <path d="M6 3H1v3h2v11H1v3h7v-3H6V3z" fill="currentColor" />
    </svg>
  );
}

export default SvgListNumberedFilled;
