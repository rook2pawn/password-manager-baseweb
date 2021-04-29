import * as React from "react";

function SvgRailsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 6V3h-2V1h-3v2H8V1H5v2H3v3h2v2H3v3h2v2H3v3h2v2H3v3h2v2h3v-2h8v2h3v-2h2v-3h-2v-2h2v-3h-2v-2h2V8h-2V6h2zm-5 12H8v-2h8v2zm0-5H8v-2h8v2zm0-5H8V6h8v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRailsFilled;
