import * as React from "react";

function SvgHomeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 1L2 10.1V23h7v-8h6v8h7V10.1L12 1z" fill="currentColor" />
    </svg>
  );
}

export default SvgHomeFilled;
