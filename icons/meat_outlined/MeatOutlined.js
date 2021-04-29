import * as React from "react";

function SvgMeatOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10.5 4C13.53 4 16 6.47 16 9.5v8.75c0 .96-.79 1.75-1.75 1.75-.57 0-.96-.27-1.2-.49l-1.22-1.15L10 16.62h.01l-3.3-3.14A5.47 5.47 0 015 9.5C5 6.47 7.47 4 10.5 4zm0-3C5.81 1 2 4.81 2 9.5c0 2.42 1.02 4.6 2.65 6.15h-.01l6.34 6.03h.01c.85.81 2 1.31 3.27 1.31 2.62 0 4.75-2.13 4.75-4.75V9.5C19 4.81 15.19 1 10.5 1z" />
        <path d="M10.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </g>
    </svg>
  );
}

export default SvgMeatOutlined;
