import * as React from "react";

function SvgCreditCardFrontOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 3v18h22V3H1zm19 15H4V6h16v12z" fill="currentColor" />
      {","}
      <path d="M11 8H6v3h5V8z" fill="currentColor" />
      {","}
      <path d="M13 13H6v3h7v-3z" fill="currentColor" />
      {","}
      <path d="M18 13h-3v3h3v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgCreditCardFrontOutlined;
