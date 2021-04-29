import * as React from "react";

function SvgCheckboxCheckedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2v20h20V2H2zm8.5 15.1l-5.6-5.6L7 9.4l3.4 3.4 6.4-6.4 2.1 2.1-8.4 8.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckboxCheckedFilled;
