import * as React from "react";

function SvgCarCheckFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.81 10.18L11.5 8.5 5 3H1v16h3.03a5.5 5.5 0 015.47-5 5.5 5.5 0 015.47 5H21v-3.1c0-2.62-1.7-4.94-4.19-5.72z"
        fill="currentColor"
      />
      {","}
      <path d="M9.5 23a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="currentColor" />
      {","}
      <path
        d="M23.56 2.56L21.44.44 17.5 4.38l-1.94-1.94-2.12 2.12 4.06 4.06 6.06-6.06z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarCheckFilled;
