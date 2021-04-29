import * as React from "react";

function SvgOfflineFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.16 7.28l2.44-2.44C15 4.3 13.28 4 11.5 4 7.09 4 3.09 5.8.19 8.69l2.12 2.12A12.98 12.98 0 0111.5 7c.91 0 1.8.09 2.66.28z"
        fill="currentColor"
      />
      {","}
      <path
        d="M8.13 13.31l3.8-3.8c-.14-.01-.28-.01-.43-.01-2.9 0-5.52 1.18-7.42 3.08L6.2 14.7c.56-.56 1.21-1.04 1.93-1.39z"
        fill="currentColor"
      />
      {","}
      <path
        d="M24 5l-1.98-1.98-17 17 2.04 2.04 3.25-3.25L12.5 21l3.54-3.54a4.95 4.95 0 00-2.97-1.4l2.07-2.07c.99.37 1.9.95 2.66 1.72l2.12-2.12c-.75-.75-1.61-1.37-2.52-1.86l1.84-1.84c.88.54 1.71 1.18 2.45 1.92l2.12-2.12c-.75-.75-1.55-1.4-2.4-1.98L24 5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOfflineFilled;
