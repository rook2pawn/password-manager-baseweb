import * as React from "react";

function SvgWheelsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm4 10.7c0-.7-.3-1.3-.6-1.8l1.8-2.5C18.3 8.6 19 10.3 19 12v.7l-3-1zm-11 1V12c0-1.8.7-3.4 1.8-4.6l1.8 2.5c-.3.5-.5 1.2-.6 1.8l-3 1zm9.8-7.1L13 8.1c-.3-.1-.6-.1-1-.1s-.6.1-1 .1L9.2 5.6C10.1 5.2 11 5 12 5c1 0 1.9.2 2.8.6zM6 15.5l3-1c.4.5.9.9 1.5 1.1v3.1c-1.9-.3-3.6-1.5-4.5-3.2zm7.5 3.3v-3.1c.6-.2 1.1-.6 1.5-1.1l3 1c-.9 1.6-2.6 2.8-4.5 3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWheelsFilled;
