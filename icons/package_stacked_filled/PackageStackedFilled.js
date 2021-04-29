import * as React from "react";

function SvgPackageStackedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.5 2H1v3h1.5l2 6h15l2-6H23V2h-.5z" fill="currentColor" />
      {","}
      <path d="M1.5 13H1v3h1.5l2 6h15l2-6H23v-3H1.5z" fill="currentColor" />
    </svg>
  );
}

export default SvgPackageStackedFilled;
