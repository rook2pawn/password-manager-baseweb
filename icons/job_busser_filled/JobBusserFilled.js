import * as React from "react";

function SvgJobBusserFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 11.8v.2H1.4c-.3-.8-.4-1.6-.4-2.5C1 5.4 4.4 2 8.5 2c2.2 0 4.2 1 5.6 2.5-3 1.1-5.1 3.9-5.1 7.3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M22.5 11.8v.2H11v-.2C11 8.6 13.6 6 16.8 6c3.2 0 5.7 2.6 5.7 5.8z"
        fill="currentColor"
      />
      {","}
      <path
        d="M23 14H1v3c0 2.8 2.2 5 5 5h12c2.8 0 5-2.2 5-5v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgJobBusserFilled;
