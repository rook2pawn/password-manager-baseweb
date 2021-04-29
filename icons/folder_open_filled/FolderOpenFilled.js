import * as React from "react";

function SvgFolderOpenFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 12H1v9h22v-9z" fill="currentColor" />
      {","}
      <path d="M23 10V6H12.5l-3-3H1v7h22z" fill="currentColor" />
    </svg>
  );
}

export default SvgFolderOpenFilled;
