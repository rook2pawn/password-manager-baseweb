import * as React from "react";

function SvgPizzaFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.965 0l-7.3 22.3 22.3-7.3c-2.3-7.1-7.9-12.7-15-15zm11 13.1l-2.9.9c-1.6-3.1-4.2-5.6-7.2-7.2l1-2.9c3.9 2.1 7.1 5.3 9.1 9.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPizzaFilled;
