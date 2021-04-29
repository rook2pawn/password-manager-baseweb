import * as React from "react";

function SvgTurtleFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.47 9.78a6.77 6.77 0 00-12.94 0l-.38 1.25-1.88-1.88A3.888 3.888 0 002.5 8a2.5 2.5 0 000 5h2.38l.22.22c.34.34.71.64 1.09.92v.01L5 18h3.14l.76-2.46c.93.3 1.91.46 2.91.46h7.44l.61 2H23l-2.53-8.22z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTurtleFilled;
