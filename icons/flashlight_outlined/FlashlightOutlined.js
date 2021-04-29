import * as React from "react";

function SvgFlashlightOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 1v5.4l2 3V23h12V9.4l2-3V1H4zm13 4.5l-2 3V20H9V8.5l-2-3V4h10v1.5z"
        fill="currentColor"
      />
      {","}
      <path d="M13.5 9h-3v4h3V9z" fill="currentColor" />
    </svg>
  );
}

export default SvgFlashlightOutlined;
