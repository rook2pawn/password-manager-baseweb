import * as React from "react";

function SvgWeatherSunFilled(props) {
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
        d="M13.5 1h-3v3h3V1zm0 22v-3h-3v3h3zM20 10.5h3v3h-3v-3zm-16 0H1v3h3v-3zm12.558-5.162l2.12-2.12 2.122 2.12L18.68 7.46l-2.121-2.122zM5.243 16.604l-2.12 2.12 2.12 2.122 2.122-2.121-2.122-2.121zm11.376 2.253l2.121-2.121 2.121 2.121-2.121 2.121-2.121-2.121zM5.355 3.299l-2.122 2.12 2.12 2.123L7.477 5.42 5.355 3.299zM18 12a6 6 0 11-12 0 6 6 0 0112 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherSunFilled;
