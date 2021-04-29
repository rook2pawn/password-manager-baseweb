import * as React from "react";

function SvgFaceMaskFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 6c-1.3 0-2.5-.5-3.4-1.4l-.2-.2C14.5 3.5 13.3 3 12 3c-1.3 0-2.5.5-3.4 1.4l-.2.2C7.5 5.5 6.3 6 5 6H0v9.5S7 20 12 20s12-4.5 12-4.5V6h-5zM3 9h2v5.8c-.7-.4-1.4-.7-2-1V9zm18 4.8c-.6.3-1.3.7-2 1V9h2v4.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFaceMaskFilled;
