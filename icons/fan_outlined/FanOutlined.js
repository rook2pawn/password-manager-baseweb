import * as React from "react";

function SvgFanOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 10h-1.7c.4-.9.7-1.9.7-3 0-3.3-2.7-6-6-6-1.7 0-3 1.3-3 3v1.7C9.1 5.3 8.1 5 7 5c-3.3 0-6 2.7-6 6 0 1.7 1.3 3 3 3h1.7c-.4.9-.7 1.9-.7 3 0 3.3 2.7 6 6 6 1.7 0 3-1.3 3-3v-1.7c.9.4 1.9.7 3 .7 3.3 0 6-2.7 6-6 0-1.7-1.3-3-3-3zM4 11c0-1.7 1.3-3 3-3 1.9 0 3.4 1.3 3.9 3H4zm7 9c-1.7 0-3-1.3-3-3 0-1.9 1.3-3.4 3-3.9V20zm2-9.1V4c1.7 0 3 1.3 3 3 0 1.9-1.3 3.4-3 3.9zm4 5.1c-1.9 0-3.4-1.3-3.9-3H20c0 1.7-1.3 3-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFanOutlined;
