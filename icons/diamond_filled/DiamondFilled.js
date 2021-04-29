import * as React from "react";

function SvgDiamondFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.07.474L.546 12 12.07 23.526 23.596 12 12.071.474z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDiamondFilled;
