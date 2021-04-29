import * as React from "react";

function SvgChevronUpDownOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 6.7v3.7l-8-5.6-8 5.6V6.7l8-5.5 8 5.5z" fill="currentColor" />
      {","}
      <path
        d="M20 13.6v3.7l-8 5.5-8-5.5v-3.7l8 5.6 8-5.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronUpDownOutlined;
