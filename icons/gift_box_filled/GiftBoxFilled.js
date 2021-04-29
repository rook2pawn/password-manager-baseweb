import * as React from "react";

function SvgGiftBoxFilled(props) {
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
        d="M8.25 0c.84 0 1.61.32 2.19.85L12 2.27 13.56.85C14.14.32 14.91 0 15.75 0 17.54 0 19 1.46 19 3.25c0 .64-.19 1.24-.51 1.75H22v7h-8.5V5h-3v7H2V5h3.51C5.19 4.49 5 3.89 5 3.25 5 1.46 6.46 0 8.25 0zm2.25 15H2v7h8.5v-7zm3 7H22v-7h-8.5v7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGiftBoxFilled;
