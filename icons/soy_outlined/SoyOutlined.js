import * as React from "react";

function SvgSoyOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 1H1v3c0 10.49 8.51 19 19 19h3v-3C23 9.51 14.49 1 4 1zm0 3c8.82 0 16 7.18 16 16-8.82 0-16-7.18-16-16z"
        fill="currentColor"
      />
      {","}
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path d="M16 18a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
    </svg>
  );
}

export default SvgSoyOutlined;
