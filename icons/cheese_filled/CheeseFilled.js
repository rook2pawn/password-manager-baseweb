import * as React from "react";

function SvgCheeseFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.61 9c-2.1-5.85-7.98-7.39-8.24-7.46l-.64-.16L2.05 9h20.56z"
        fill="currentColor"
      />
      {","}
      <path d="M23 12H1v9h22v-9z" fill="currentColor" />
    </svg>
  );
}

export default SvgCheeseFilled;
