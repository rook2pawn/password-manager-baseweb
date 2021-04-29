import * as React from "react";

function SvgBankOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 10V8L12 0 1 8v2h2v9H1v3h22v-3h-2v-9h2zm-7 9v-9h-3v9h-2v-9H8v9H6V8.1l6-4.4 6 4.4V19h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBankOutlined;
