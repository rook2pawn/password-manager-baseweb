import * as React from "react";

function SvgHideFilled(props) {
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
        d="M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5c0 .3 0 .7-.1 1 .8-.3 1.7-.5 2.6-.5 1.5 0 2.8.5 4 1.2.04-.122.082-.24.122-.357.155-.451.298-.866.378-1.343-1.4-5.8-6.2-10-12-10S1.4 6.2 0 12c1.4 5.8 6.2 10 12 10h1c-.3-.8-.5-1.6-.5-2.5 0-.9.2-1.8.5-2.6-.3.1-.7.1-1 .1zm0-3a2 2 0 100-4 2 2 0 000 4zm7.5 3.5L22 15l2 2-2.5 2.5L24 22l-2 2-2.5-2.5L17 24l-2-2 2.5-2.5L15 17l2-2 2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHideFilled;
