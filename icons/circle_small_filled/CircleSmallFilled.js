import * as React from "react";

function SvgCircleSmallFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 17a5 5 0 100-10 5 5 0 000 10z" fill="currentColor" />
    </svg>
  );
}

export default SvgCircleSmallFilled;
