import * as React from "react";

function SvgPhotosFilled(props) {
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
        d="M9.5 8.5l3-3L18 11V1H1v8l4.5-4.5 4 4zM18 15l-5.5-5.5-3 3-4-4L1 13v5h17v-3zM6 20h14V6h3v17H6v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhotosFilled;
