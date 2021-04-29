import * as React from "react";

function SvgBowTieFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 12c0-1.5.7-2.9 1.8-3.8L2.6 4.5C1 6.6 0 9.2 0 12s1 5.4 2.6 7.5l6.2-3.7C7.7 14.9 7 13.5 7 12z"
        fill="currentColor"
      />
      {","}
      <path
        d="M21.4 4.5l-6.2 3.7c1.1.9 1.8 2.3 1.8 3.8s-.7 2.9-1.8 3.8l6.2 3.7c1.6-2 2.6-4.6 2.6-7.5 0-2.9-1-5.4-2.6-7.5z"
        fill="currentColor"
      />
      {","}
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgBowTieFilled;
