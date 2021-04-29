import * as React from "react";

function SvgDocumentOutlined(props) {
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
        d="M3 1v22h18V1H3zm15 19H6V4h12v16zM16 6H8v3h8V6zm-8 5h6v3H8v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDocumentOutlined;
