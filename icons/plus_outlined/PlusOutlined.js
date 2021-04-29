import * as React from "react";

function SvgPlusOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 10.5h-9.5V1h-3v9.5H1v3h9.5V23h3v-9.5H23v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusOutlined;
