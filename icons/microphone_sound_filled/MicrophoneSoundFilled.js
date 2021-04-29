import * as React from "react";

function SvgMicrophoneSoundFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 13c0 2.24 1.48 4.11 3.5 4.75V21H7v3h10v-3h-3.5v-3.25c2.02-.64 3.5-2.51 3.5-4.75v-1.5H7V13z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12 2C9.24 2 7 4.24 7 7v1.5h10V7c0-2.76-2.24-5-5-5z"
        fill="currentColor"
      />
      {","}
      <path
        d="M3.51 2.01c-4.68 4.68-4.68 12.29 0 16.97l2.12-2.12c-3.51-3.51-3.51-9.22 0-12.73L3.51 2.01z"
        fill="currentColor"
      />
      {","}
      <path
        d="M20.49 2.01l-2.12 2.12c3.51 3.51 3.51 9.22 0 12.73l2.12 2.12c4.67-4.67 4.67-12.29 0-16.97z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMicrophoneSoundFilled;
