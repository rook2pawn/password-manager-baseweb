import * as React from "react";

function SvgWeatherPartlyCloudyFilled(props) {
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
        d="M6 10.7c-1.3 0-2.5.3-3.5.9C1.6 10.7 1 9.4.9 8c0-2.8 2.2-5 5-5s5 2.2 5 5v.2c-1.1.7-2.1 1.6-2.8 2.8-.6-.2-1.4-.3-2.1-.3zM23 20H1v-2c0-2.8 2.2-5 5-5 1.2 0 2.3.5 3.2 1.2.8-3 3.6-5.2 6.8-5.2 3.9 0 7 3.1 7 7v4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherPartlyCloudyFilled;
