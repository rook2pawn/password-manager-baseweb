import * as React from "react";

function SvgCreditCardFilled(props) {
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
        d="M1 4h22v4H1V4zm0 7h22v9H1v-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCreditCardFilled;
