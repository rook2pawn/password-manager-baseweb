import * as React from "react";

function SvgRouteFilled(props) {
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
        d="M23 1h-7v7h7V1zM4.5 23a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm11.241-3.014c1.214 0 2.225-1.004 2.225-2.21V9.941H21v7.835C21 20.59 18.573 23 15.741 23c-2.831 0-5.258-2.31-5.258-5.224V6.224c0-1.206-1.011-2.21-2.225-2.21-1.213 0-2.224 1.004-2.224 2.21v7.835H3V6.224C3 3.41 5.427 1 8.258 1c2.832 0 5.259 2.31 5.259 5.224v11.552c0 1.206 1.01 2.21 2.224 2.21z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRouteFilled;
