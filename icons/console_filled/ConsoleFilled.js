import * as React from "react";

function SvgConsoleFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1v22h22V1H1zm6.06 13.56l-2.12-2.12L7.88 9.5 4.94 6.56l2.12-2.12 5.06 5.06-5.06 5.06z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConsoleFilled;
