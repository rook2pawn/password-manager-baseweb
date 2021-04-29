import * as React from "react";

function SvgBriefcaseFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 7V2H6v5H1v15h22V7h-5zm-3 0H9V5h6v2z" fill="currentColor" />
    </svg>
  );
}

export default SvgBriefcaseFilled;
