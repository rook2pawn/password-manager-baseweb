import * as React from "react";

function SvgCreditCardFrontFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 4v16h22V4H1zm3 3h5v3H4V7zm0 7h4v3H4v-3zm6 0h4v3h-4v-3zm10 3h-4v-3h4v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCreditCardFrontFilled;
