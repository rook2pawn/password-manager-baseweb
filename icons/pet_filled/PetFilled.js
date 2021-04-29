import * as React from "react";

function SvgPetFilled(props) {
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
        d="M15 4.5C15 6.433 13.657 8 12 8S9 6.433 9 4.5 10.343 1 12 1s3 1.567 3 3.5zM4.9 20.9c3.4 2.7 10.8 2.9 14.3-.1.5-.4.8-1.1.8-1.8 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 .7.3 1.4.9 1.9zM20 11c1.657 0 3-1.567 3-3.5S21.657 4 20 4s-3 1.567-3 3.5 1.343 3.5 3 3.5zM7 7.5C7 9.433 5.657 11 4 11S1 9.433 1 7.5 2.343 4 4 4s3 1.567 3 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPetFilled;
