import * as React from "react";

function SvgCreditOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6V3h7v18H1V3h7v3H4v12h16V6h-4zm-9 7.1V9.6l3.5 2.6V3h3v9.2L17 9.6v3.5l-5 3.6-5-3.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCreditOutlined;
