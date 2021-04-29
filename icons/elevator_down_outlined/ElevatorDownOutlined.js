import * as React from "react";

function SvgElevatorDownOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 23h10V1H1v22zM9 6l-3 5-3-5h6zm0 8l-3 5-3-5h6z"
        fill="currentColor"
      />
      {","}
      <path
        d="M19.5 7h-3C14.6 7 13 8.6 13 10.5V18h1v5h3v-8h-1v-4.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5V15h-1v8h3v-5h1v-7.5C23 8.6 21.4 7 19.5 7z"
        fill="currentColor"
      />
      {","}
      <path d="M18 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor" />
    </svg>
  );
}

export default SvgElevatorDownOutlined;
