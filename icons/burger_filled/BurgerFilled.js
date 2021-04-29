import * as React from "react";

function SvgBurgerFilled(props) {
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
        d="M23 7.9C23 4.6 20.4 2 17.1 2H6.9C3.6 2 1 4.6 1 7.9V8h22v-.1zM1 16.1C1 19.4 3.6 22 6.9 22h10.2c3.3 0 5.9-2.6 5.9-5.9V16l-22 .1zM0 10h24v4H0v-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBurgerFilled;
