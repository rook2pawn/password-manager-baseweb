import * as React from "react";

function SvgListOutlined(props) {
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
        d="M1 3h3v3H1V3zm6 0h16v3H7V3zm0 7h16v3H7v-3zm16 7H7v3h16v-3zM4 10H1v3h3v-3zm-3 7h3v3H1v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgListOutlined;
