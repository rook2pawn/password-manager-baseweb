import * as React from "react";

function SvgSatelliteFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 1c-.5 0-1 .03-1.49.09l.35 2.79c.37-.06.75-.08 1.14-.08 5.07 0 9.2 4.13 9.2 9.2 0 .39-.02.77-.08 1.14l2.79.35c.06-.49.09-.99.09-1.49 0-6.63-5.37-12-12-12z"
        fill="currentColor"
      />
      {","}
      <path
        d="M17.94 13.87c.04-.28.06-.57.06-.87 0-3.87-3.13-7-7-7-.3 0-.59.02-.87.06l.35 2.78c.17-.03.34-.04.52-.04a4.2 4.2 0 014.2 4.2c0 .18-.01.35-.04.52l2.78.35z"
        fill="currentColor"
      />
      {","}
      <path
        d="M13 13c0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59L3.93 5.93C.02 9.84.02 16.17 3.93 20.07c3.91 3.9 10.24 3.91 14.14 0l-5.66-5.66c.37-.36.59-.86.59-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSatelliteFilled;
