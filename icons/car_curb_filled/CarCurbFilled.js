import * as React from "react";

function SvgCarCurbFilled(props) {
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
        d="M17 19h-4v-2H2V8h11.1l-1.3-4H2V1h10.6c.9 0 1.6.6 1.9 1.4L16 7h2v3h-1v9zm-3-7h-4v2h4v-2zm5 9v-5h5v3h-2v5H2v-3h17z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarCurbFilled;
