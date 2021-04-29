import * as React from "react";

function SvgFlatTruckFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 4H1v2.9h5V10H1v8c0 1.1.9 2 2 2h2c0-2.8 2.2-5 5-5 1.6 0 3.1.8 4 2V1h-3v3z"
        fill="currentColor"
      />
      {","}
      <path d="M23 17h-7v3h7v-3z" fill="currentColor" />
      {","}
      <path d="M10 23a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgFlatTruckFilled;
