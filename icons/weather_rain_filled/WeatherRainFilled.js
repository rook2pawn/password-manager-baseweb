import * as React from "react";

function SvgWeatherRainFilled(props) {
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
        d="M9.2 7.2C10 4.2 12.8 2 16 2c3.9 0 7 3.1 7 7v4H1v-2c0-2.8 2.2-5 5-5 1.2 0 2.3.5 3.2 1.2zM8.1 18L7 15H4l1.1 3h3zm-2.2 2l1.2 3h3l-1.2-3h-3zm13.6-5l1.1 3h-3l-1.1-3h3zm-1.1 5l1.2 3h3l-1.2-3h-3zm-5.2-5l1.2 3h-3l-1.2-3h3zm-1 5l1.2 3h3l-1.2-3h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherRainFilled;
