import * as React from "react";

function SvgSkiBootsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 2H3v3h11V2z" fill="currentColor" />
      {","}
      <path
        d="M20.44 14.51l-5.19-2-3.87 3.87-1.76-1.76L14 10.24V7H3v15h7v-1h6v1h7v-3.76a4.01 4.01 0 00-2.56-3.73z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSkiBootsFilled;
