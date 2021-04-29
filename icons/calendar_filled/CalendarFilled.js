import * as React from "react";

function SvgCalendarFilled(props) {
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
        d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22zm0 15H1V10h22v13zM8 14H5v3h3v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarFilled;
