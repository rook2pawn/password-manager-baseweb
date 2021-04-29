import * as React from "react";

function SvgBurstFilled(props) {
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
        d="M10.5 1h3v5h-3V1zm0 17h3v5h-3v-5zM6 10.5H1v3h5v-3zm12 0h5v3h-5v-3zM6.676 15.18L3.14 18.716l2.122 2.121 3.535-3.535-2.121-2.122zm8.485-8.456l3.536-3.535 2.121 2.121-3.535 3.536-2.122-2.122zm-9.735-3.65L3.305 5.197 6.84 8.732 8.962 6.61 5.426 3.075zm9.87 14.143l2.122-2.122 3.536 3.536-2.121 2.121-3.536-3.535z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBurstFilled;
