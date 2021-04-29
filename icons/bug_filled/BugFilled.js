import * as React from "react";

function SvgBugFilled(props) {
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
        d="M18.9 9H5.2c.4-2.1 1.6-3.3 2.6-4-1.2-1-2.1-2.4-2.5-4h3.1c.6 1.5 2 2.5 3.7 2.5 1.7 0 3.1-1 3.7-2.5h3.1c-.3 1.6-1.2 3-2.5 4 1.2 1 2.1 2.4 2.5 4zm4.1 5h-4v2.8l4 2v3.4l-5-2.5c-1.3 2-3.4 3.3-6 3.3s-4.8-1.3-6-3.3l-5 2.5v-3.4l4-2V14H1v-3h22v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBugFilled;
