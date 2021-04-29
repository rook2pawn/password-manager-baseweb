import * as React from "react";

function SvgSoundFilled(props) {
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
        d="M14 1.2v3.1c3.4.9 6 4 6 7.8s-2.6 6.8-6 7.8V23c5.1-.9 9-5.4 9-10.8 0-5.6-3.9-10.1-9-11zM17 12c0-2.1-1.2-3.8-3-4.6v9.2c1.8-.8 3-2.5 3-4.6zM1 7h3.8L9 3h2v18H9l-4.2-4H1V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSoundFilled;
