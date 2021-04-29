import * as React from "react";

function SvgBankFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 10V8L12 0 1 8v2h2v9H1v3h22v-3h-2v-9h2zM7 10h3v9H7v-9zm7 9v-9h3v9h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBankFilled;
