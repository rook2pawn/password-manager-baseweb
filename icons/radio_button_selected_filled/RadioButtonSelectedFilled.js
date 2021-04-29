import * as React from "react";

function SvgRadioButtonSelectedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-8a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRadioButtonSelectedFilled;
