import * as React from "react";

function SvgMuseumFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 20H1v3h22v-3z" fill="currentColor" />
      {","}
      <path
        d="M4 18h5v-5c0-1.66 1.34-3 3-3s3 1.34 3 3v5h5V9h2V7L12 1 2 7v2h2v9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMuseumFilled;
