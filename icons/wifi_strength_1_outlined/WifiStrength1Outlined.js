import * as React from "react";

function SvgWifiStrength1Outlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 16.5L12 20l3.5-3.5c-.9-.9-2.2-1.5-3.5-1.5-1.3 0-2.6.5-3.5 1.5z"
        fill="currentColor"
      />
      {","}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.7 8.7c3-3 7-4.7 11.3-4.7 4.3 0 8.3 1.7 11.3 4.7l-2.1 2.1C18.7 8.4 15.5 7 12 7c-3.5 0-6.7 1.3-9.2 3.8L.7 8.7zm6 6l-2.1-2.1c2-2 4.6-3.1 7.4-3.1 2.8 0 5.4 1.1 7.4 3.1l-2.1 2.1c-1.4-1.4-3.3-2.2-5.3-2.2s-3.9.8-5.3 2.2z"
        fill="currentColor"
        opacity={0.3}
      />
    </svg>
  );
}

export default SvgWifiStrength1Outlined;
