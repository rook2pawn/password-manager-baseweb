import * as React from "react";

function SvgSchoolFilled(props) {
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
        d="M12 16l11.5-7.5L12 1 .5 8.5 12 16zm9 1.5v-5l-9 5.9-9-5.9v5c4.3 5.7 13.3 6.3 18 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSchoolFilled;
