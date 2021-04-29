import * as React from "react";

function SvgBurgerOutlined(props) {
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
        d="M23 7.9V8h-3v-.1C20 6.3 18.7 5 17.1 5H6.9C5.3 5 4 6.3 4 7.9V8H1v-.1C1 4.6 3.6 2 6.9 2h10.2C20.4 2 23 4.6 23 7.9zm0 8.1c0 3.4-2.6 6-5.9 6H6.9C3.6 22 1 19.4 1 16.1V16h3v.1C4 17.7 5.3 19 6.9 19h10.2c1.6 0 2.9-1.3 2.9-2.9V16h3zM0 10h24v4H0v-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBurgerOutlined;
