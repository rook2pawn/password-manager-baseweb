import * as React from "react";

function SvgWalletFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3z" fill="currentColor" />
      {","}
      <path d="M1 4v4h7.12l3 3h1.76l3-3H23V4H1z" fill="currentColor" />
    </svg>
  );
}

export default SvgWalletFilled;
