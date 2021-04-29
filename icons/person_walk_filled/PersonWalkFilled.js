import * as React from "react";

function SvgPersonWalkFilled(props) {
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
        d="M12.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5.4 23h3.5l2.1-3.3-1.8-2.8L5.4 23zM19 23l-5-7.9V11l4.5 4.5 1.8-1.8L14.6 8H9.1C6.9 8 5 9.8 5 12.1V15h3v-2.9c0-.6.5-1.1 1.1-1.1h.9v3.4l5.4 8.6H19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonWalkFilled;
