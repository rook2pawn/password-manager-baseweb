import * as React from "react";

function SvgMediaPlayerOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M1 1v22h22V1H1zm19 3v10H4V4h16zM4 20v-3h16v3H4z" />
        <path d="M10 5.5v7L15.5 9 10 5.5z" />
      </g>
    </svg>
  );
}

export default SvgMediaPlayerOutlined;
