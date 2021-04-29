import * as React from "react";

function SvgPhotosOutlined(props) {
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
        d="M1 1h17v17H1V1zm11.5 5.5L15 9V4H4v4l3-3 3.5 3.5 2-2zM4 12v3h11v-2l-2.5-2.5-2 2L7 9l-3 3zm2 8h14V6h3v17H6v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhotosOutlined;
