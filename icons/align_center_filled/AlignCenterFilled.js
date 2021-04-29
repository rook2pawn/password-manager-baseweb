import * as React from "react";

function SvgAlignCenterFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 3H1v3h22V3z" fill="currentColor" />
      {","}
      <path d="M22 17H2v3h20v-3z" fill="currentColor" />
      {","}
      <path d="M18 10H6v3h12v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgAlignCenterFilled;
