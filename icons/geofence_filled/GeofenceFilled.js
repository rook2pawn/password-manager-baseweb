import * as React from "react";

function SvgGeofenceFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 16.3V7.7c1.2-.6 2-1.8 2-3.2C23 2.6 21.4 1 19.5 1c-1.4 0-2.6.8-3.2 2H7.7c-.6-1.2-1.8-2-3.2-2C2.6 1 1 2.6 1 4.5c0 1.4.8 2.6 2 3.2v8.7c-1.2.6-2 1.8-2 3.2C1 21.4 2.6 23 4.5 23c1.4 0 2.6-.8 3.2-2h8.7c.6 1.2 1.8 2 3.2 2 1.9 0 3.5-1.6 3.5-3.5-.1-1.4-.9-2.6-2.1-3.2zM16.3 18H7.7c-.3-.7-.9-1.3-1.7-1.7V7.7c.7-.4 1.3-1 1.7-1.7h8.7c.3.7.9 1.3 1.7 1.7v8.7c-.8.3-1.4.9-1.8 1.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGeofenceFilled;
