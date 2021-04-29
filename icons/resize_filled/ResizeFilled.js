import * as React from "react";

function SvgResizeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 18.52V23h-4.48L23 18.52z" fill="currentColor" />
      {","}
      <path d="M23 11.52v3.96L15.48 23h-3.96L23 11.52z" fill="currentColor" />
      {","}
      <path d="M23 4.52v3.96L8.48 23H4.52L23 4.52z" fill="currentColor" />
    </svg>
  );
}

export default SvgResizeFilled;
