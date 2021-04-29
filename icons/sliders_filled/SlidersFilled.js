import * as React from "react";

function SvgSlidersFilled(props) {
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
        d="M6 1.5c2.2 0 4.1 1.5 4.7 3.5H23v3H10.7c-.6 2-2.5 3.5-4.7 3.5-2.8 0-5-2.2-5-5s2.2-5 5-5zM13.3 16c.6-2 2.5-3.5 4.7-3.5 2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.2 0-4.1-1.5-4.7-3.5H1v-3h12.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSlidersFilled;
