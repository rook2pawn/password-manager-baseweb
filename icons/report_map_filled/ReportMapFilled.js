import * as React from "react";

function SvgReportMapFilled(props) {
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
        d="M16.2 11.3L12 15.5l-4.2-4.2c-2.3-2.4-2.3-6.2 0-8.5C8.9 1.6 10.5 1 12 1s3 .6 4.2 1.8c2.3 2.4 2.3 6.2 0 8.5zM13.5 7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm5.8 4H21l2 11H1l2-11h1.7l7.3 7.3 7.3-7.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReportMapFilled;
