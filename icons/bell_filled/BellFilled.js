import * as React from "react";

function SvgBellFilled(props) {
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
        d="M20 10v5h1v3H3v-3h1v-5c0-3.7 2.6-6.8 6-7.7V0h4v2.3c3.4.9 6 4 6 7.7zm-8 13c-.6 0-1.2-.2-1.7-.7L8 20h8l-2.3 2.3c-.4.4-1.1.7-1.7.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBellFilled;
