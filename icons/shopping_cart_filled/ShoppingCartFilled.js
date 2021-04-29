import * as React from "react";

function SvgShoppingCartFilled(props) {
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
        d="M5.5 17H21l2-12H6.5l-.4-3H1v3h2.5l2 12zm2 5a2 2 0 100-4 2 2 0 000 4zm14-2a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShoppingCartFilled;
