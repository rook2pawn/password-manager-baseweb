import * as React from "react";

function SvgPanelRightFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2H1v20h11V2z" fill="currentColor" />
      {","}
      <path d="M23 2h-8v20h8V2z" fill="currentColor" />
    </svg>
  );
}

export default SvgPanelRightFilled;
