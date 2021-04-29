import * as React from "react";

function SvgWeatherMoonFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.8 13.5c-4 0-7.2-3.2-7.2-7.2 0-2.1.9-3.9 2.2-5.2C6.8 1 2.1 5.8 2.1 11.6s4.7 10.5 10.5 10.5c5.7 0 10.6-4.6 10.5-10.7-1.4 1.2-3.3 2.1-5.3 2.1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherMoonFilled;
