import * as React from "react";

function SvgEnvelopeFilled(props) {
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
        d="M12 11.3L1.3 4h21.4L12 11.3zM1 7.2l11 7.5 11-7.5V20H1V7.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelopeFilled;
