import * as React from "react";

function SvgTrashFilled(props) {
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
        d="M21 0h-6v3h6V0zm-1 5h-4l-3 3v15h10V8l-3-3zM1 1h10v5H1V1zm10 7H1v8h10V8zM1 18h10v5H1v-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashFilled;
