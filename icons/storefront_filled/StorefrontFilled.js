import * as React from "react";

function SvgStorefrontFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 22h13v-8h4v8h3V11H2v11zm3-8h7v4H5v-4z" fill="currentColor" />
      {","}
      <path d="M18.5 0h-13L1 6v2l1 1h20l1-1V6l-4.5-6z" fill="currentColor" />
    </svg>
  );
}

export default SvgStorefrontFilled;
