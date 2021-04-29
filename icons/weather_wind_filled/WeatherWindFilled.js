import * as React from "react";

function SvgWeatherWindFilled(props) {
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
        d="M16.5 1C19 1 21 3 21 5.5S19 10 16.5 10H1V7h15.5c.8 0 1.5-.7 1.5-1.5S17.3 4 16.5 4c-.6 0-1.2.4-1.4 1h-3c.2-2.2 2.1-4 4.4-4zM1 12h16.5c3 0 5.5 2.5 5.5 5.5S20.5 23 17.5 23 12 20.5 12 17.5V17h3v.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5H1v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeatherWindFilled;
