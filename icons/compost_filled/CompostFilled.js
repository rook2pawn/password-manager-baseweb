import * as React from "react";

function SvgCompostFilled(props) {
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
        d="M5.02 2.013C5.464 2.307 10 5.303 10 11c0 3.8-2 6.4-3.5 7.8V24h-3v-5.2C2 17.4 0 14.8 0 11c0-5.698 4.536-8.693 4.98-8.987L5 2l.02.013zM23 2l-4.5 4.5V9H22v3h-3.5v3H22c0 5.698-4.536 8.693-4.98 8.987L17 24l-.02-.013C16.536 23.693 12 20.697 12 15h3.5v-3H12V9h3.5V6.5L11 2h4.1L17 3.9 18.9 2H23z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCompostFilled;
