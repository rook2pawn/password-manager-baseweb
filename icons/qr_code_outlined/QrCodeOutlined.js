import * as React from "react";

function SvgQrCodeOutlined(props) {
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
        d="M1 23V1h22v22H1zM4 4v16h16V4H4zm8 5V6H6v6h3v3H6v3h3v-3h3v3h6v-6h-3V9h3V6h-3v3h-3zm0 3v3h3v-3h-3zm0 0V9H9v3h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgQrCodeOutlined;
