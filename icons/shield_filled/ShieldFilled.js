import * as React from "react";

function SvgShieldFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C6.68 1 2 3.04 2 3.04v11.9c0 4.84 5.57 7.15 10 9.06 4.4-1.89 10-4.2 10-9.06V3.04S17.5 1 12 1zm7 13.94c0 2.39-3.09 4.07-7 5.79-4.03-1.77-7-3.39-7-5.79V5.15C6.65 4.64 9.26 4 12 4c2.83 0 5.39.63 7 1.14v9.8z"
        fill="currentColor"
      />
      {","}
      <path
        d="M7 6.67v8.28c0 1.15 2.7 2.56 5 3.6 2.3-1.04 5-2.45 5-3.6v-8.3C15.63 6.3 13.88 6 12 6c-1.83 0-3.59.31-5 .67z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShieldFilled;
