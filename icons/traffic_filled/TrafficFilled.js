import * as React from "react";

function SvgTrafficFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 11.3c-.3-.8-1.1-1.3-1.9-1.3H4.9c-.9 0-1.6.5-1.9 1.3L1.7 15H0v3h1v5h3v-1h9v1h3v-5h1v-3h-1.7L14 11.3zM6 19H3v-2h3v2zm8 0h-3v-2h3v2z"
        fill="currentColor"
      />
      {","}
      <path
        d="M24 6h-1.7L21 2.3c-.3-.8-1-1.3-1.9-1.3h-7.2c-.8 0-1.6.5-1.9 1.3L8 8h4.1c1.7 0 3.2 1.1 3.8 2.7l.8 2.3H20v1h3V9h1V6zm-3 4h-3V8h3v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrafficFilled;
