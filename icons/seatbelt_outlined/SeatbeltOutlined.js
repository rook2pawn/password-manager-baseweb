import * as React from "react";

function SvgSeatbeltOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 12V9l-3-3V2.5L10.5 0 8.38 2.12 10 3.74v2.64L6.38 10H3.74L2.12 8.38 0 10.5 2.5 13H6l3 3h3l4-4zm-5.76 1l-1.31-1.31 2.76-2.76L13 10.24v.52L10.76 13h-.52z"
        fill="currentColor"
      />
      {","}
      <path
        d="M20 11.5L11.5 20l4 4 2.12-2.12L15.74 20 20 15.74l1.88 1.88L24 15.5l-4-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSeatbeltOutlined;
