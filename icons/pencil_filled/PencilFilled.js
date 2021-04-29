import * as React from "react";

function SvgPencilFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.4 6.6l3 3L5 22H2v-3L14.4 6.6z" fill="currentColor" />
      {","}
      <path
        d="M19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPencilFilled;
