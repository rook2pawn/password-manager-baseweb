import * as React from "react";

function SvgMoneyOutlined(props) {
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
        d="M1 20V4h22v16H1zm16-6h3V7H7v3H4v7h13v-3zm-2-2a3 3 0 11-6 0 3 3 0 016 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoneyOutlined;
