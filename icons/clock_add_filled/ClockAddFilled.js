import * as React from "react";

function SvgClockAddFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 13c1.2 0 2.4.3 3.3.9.1-.6.2-1.3.2-1.9 0-6.1-4.9-11-11-11S1 5.9 1 12s4.9 11 11 11c.7 0 1.3-.1 1.9-.2-.6-1-.9-2.1-.9-3.3 0-3.6 2.9-6.5 6.5-6.5zm-5.6-.6l-5.8 2.9-1.3-2.7 4.2-2.1V4h3v8.4h-.1z"
        fill="currentColor"
      />
      {","}
      <path d="M24 18h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgClockAddFilled;
