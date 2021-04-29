import * as React from "react";

function SvgWeatherSnowFilled(props) {
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
        d="M9.2 7.2C10 4.2 12.8 2 16 2c3.9 0 7 3.1 7 7v4H1v-2c0-2.8 2.2-5 5-5 1.2 0 2.3.5 3.2 1.2zM10 16a2 2 0 11-4 0 2 2 0 014 0zm-4 5a2 2 0 11-4 0 2 2 0 014 0zm16 0a2 2 0 11-4 0 2 2 0 014 0zm-10 2a2 2 0 100-4 2 2 0 000 4zm4-5a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherSnowFilled;
