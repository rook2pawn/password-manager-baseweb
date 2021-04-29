import * as React from "react";

function SvgHideOutlined(props) {
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
        d="M12.5 19H12c-4 0-7.6-2.8-8.9-7C4.4 7.8 8 5 12 5s7.6 2.8 8.9 7c-.05.1-.075.2-.1.3-.025.1-.05.2-.1.3 1 .2 2 .6 2.8 1.1.04-.122.082-.24.122-.357.155-.451.298-.866.378-1.343-1.4-5.8-6.2-10-12-10S1.4 6.2 0 12c1.4 5.8 6.2 10 12 10h1c-.3-.8-.5-1.6-.5-2.5V19zm-.5-3a4 4 0 100-8 4 4 0 000 8zm7.5 1.5L22 15l2 2-2.5 2.5L24 22l-2 2-2.5-2.5L17 24l-2-2 2.5-2.5L15 17l2-2 2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHideOutlined;
