import * as React from "react";

function SvgWindMillFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 19.67V23h10v-3.33l-5-5-5 5z" fill="currentColor" />
      {","}
      <path
        d="M21.06 3.06L18.94.94 12 7.88 5.06.94 2.94 3.06 9.88 10l-6.94 6.94 2.12 2.12L12 12.12l6.94 6.94 2.12-2.12L14.12 10l6.94-6.94z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWindMillFilled;
