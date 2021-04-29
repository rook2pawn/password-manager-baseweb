import * as React from "react";

function SvgArrowLaunchFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 15v8H1V3h8v3H4v14h14v-5h3z" fill="currentColor" />
      {","}
      <path
        d="M12 1v3h5.9l-8 7.9 2.2 2.2 7.9-8V12h3V1H12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLaunchFilled;
