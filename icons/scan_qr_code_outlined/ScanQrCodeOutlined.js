import * as React from "react";

function SvgScanQrCodeOutlined(props) {
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
        d="M5 5h5V2H2v7h3V5z"
        fill="currentColor"
      />
      {","}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 19h-5v3h8v-8h-3v5z"
        fill="currentColor"
      />
      {","}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 14H2v8h8v-3H5v-5z"
        fill="currentColor"
      />
      {","}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2v3h5v5h3V2h-8z"
        fill="currentColor"
      />
      {","}
      <path d="M12 7H7v5h5V7z" fill="currentColor" />
      {","}
      <path d="M17 12h-5v5h5v-5z" fill="currentColor" />
    </svg>
  );
}

export default SvgScanQrCodeOutlined;
