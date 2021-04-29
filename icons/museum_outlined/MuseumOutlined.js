import * as React from "react";

function SvgMuseumOutlined(props) {
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
        d="M16 18v-5.5c0-2.21-1.79-4-4-4s-4 1.79-4 4V18h3v-5.5c0-.55.45-1 1-1s1 .45 1 1V18h3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12 .5L1 7v2h2v9h3V7.53l6-3.55 6 3.55V18h3V9h2V7L12 .5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMuseumOutlined;
