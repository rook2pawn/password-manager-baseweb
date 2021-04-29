import * as React from "react";

function SvgFeedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 5v3c8.27 0 15 6.73 15 15h3c0-9.92-8.07-18-18-18z"
        fill="currentColor"
      />
      {","}
      <path
        d="M1 11v3c4.96 0 9 4.04 9 9h3c0-6.62-5.38-12-12-12z"
        fill="currentColor"
      />
      {","}
      <path d="M1 17v6h6c0-3.31-2.69-6-6-6z" fill="currentColor" />
    </svg>
  );
}

export default SvgFeedFilled;
