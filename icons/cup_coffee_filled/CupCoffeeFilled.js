import * as React from "react";

function SvgCupCoffeeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 5V2H2v14c0 3.3 2.7 6 6 6h4c3 0 5.4-2.2 5.9-5h.1c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 9V8c1.7 0 3 1.3 3 3s-1.3 3-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCupCoffeeFilled;
