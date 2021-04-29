import * as React from "react";

function SvgClockCrossFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.01 15.01L20 17.02l-2.01-2.01-1.98 1.98L18.02 19l-2.01 2.01 1.98 1.98L20 20.98l2.01 2.01 1.98-1.98L21.98 19l2.01-2.01-1.98-1.98z"
        fill="currentColor"
      />
      {","}
      <path
        d="M11 0C4.92 0 0 4.92 0 11a10.994 10.994 0 0014.03 10.57A6.5 6.5 0 0120 12.5c.65 0 1.27.09 1.86.27.09-.58.14-1.17.14-1.77 0-6.08-4.92-11-11-11zm2 11.43l-5.83 2.91-1.34-2.68L10 9.57V3h3v8.43z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockCrossFilled;
