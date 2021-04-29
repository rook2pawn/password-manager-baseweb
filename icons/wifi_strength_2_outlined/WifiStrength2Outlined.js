import * as React from "react";

function SvgWifiStrength2Outlined(props) {
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
        d="M6.7 14.7l-2.1-2.1c2-2 4.6-3.1 7.4-3.1 2.8 0 5.4 1.1 7.4 3.1l-2.1 2.1c-1.4-1.4-3.3-2.2-5.3-2.2s-3.9.8-5.3 2.2zM12 20l-3.5-3.5c.9-1 2.2-1.5 3.5-1.5 1.3 0 2.6.6 3.5 1.5L12 20z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12 4C7.7 4 3.7 5.7.7 8.7l2.1 2.1C5.3 8.3 8.5 7 12 7c3.5 0 6.7 1.4 9.2 3.8l2.1-2.1c-3-3-7-4.7-11.3-4.7z"
        fill="currentColor"
        opacity={0.3}
      />
    </svg>
  );
}

export default SvgWifiStrength2Outlined;
