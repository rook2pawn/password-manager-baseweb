import * as React from "react";

function SvgBoneFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 4.5C19.5 2.57 17.93 1 16 1s-3.5 1.57-3.5 3.5c0 .84.31 1.6.8 2.2l-6.6 6.6c-.6-.49-1.36-.8-2.2-.8C2.57 12.5 1 14.07 1 16s1.57 3.5 3.5 3.5C4.5 21.43 6.07 23 8 23s3.5-1.57 3.5-3.5c0-.84-.31-1.6-.8-2.2l6.6-6.6c.6.49 1.36.8 2.2.8 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBoneFilled;
