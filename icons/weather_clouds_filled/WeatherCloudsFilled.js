import * as React from "react";

function SvgWeatherCloudsFilled(props) {
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
        d="M9.2 6.2C10 3.2 12.8 1 16 1c3.9 0 7 3.1 7 7v1.9c-1.7-2-4.2-3.2-7-3.2-3.3 0-6.2 1.7-7.9 4.3-.6-.2-1.4-.3-2.1-.3-1.9 0-3.7.8-5 2V10c0-2.8 2.2-5 5-5 1.2 0 2.3.4 3.2 1.2zm0 8C10 11.2 12.8 9 16 9c3.9 0 7 3.1 7 7v4H1v-2c0-2.8 2.2-5 5-5 1.2 0 2.3.5 3.2 1.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherCloudsFilled;
