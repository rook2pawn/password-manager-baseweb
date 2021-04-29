import * as React from "react";

function SvgEnvelopeOpenFilled(props) {
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
        d="M2 7l10-7 10 7-10 6.8L2 7zm-1 3l11 7.5L23 10v12H1V10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelopeOpenFilled;
