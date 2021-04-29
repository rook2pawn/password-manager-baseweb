import * as React from "react";

function SvgPhotoLandscapeFilled(props) {
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
        d="M12.5 11.5L6.9 6 1 11.9V3h22v12l-7-7-3.5 3.5zm0 3.9l3.5-3.5 7 7.1v2H1v-5.1l5.9-6 5.6 5.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhotoLandscapeFilled;
