import * as React from "react";

function SvgLeafFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 1C9.3 1 5 5.3 5 10.5v6.4L.9 21 3 23.1 7.1 19h5.4C18.3 19 23 14.3 23 8.5V1h-8.5zm0 3H19L8 15v-4.5C8 6.9 10.9 4 14.5 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLeafFilled;
