import * as React from "react";

function SvgDatabaseFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.09 16.25C3.04 17.37 3 18.49 3 19c0 2.21 4.03 4 9 4s9-1.79 9-4v-2.81c-2.06 1.44-5.24 2.31-9 2.31-3.71 0-6.85-.85-8.91-2.25z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12 11.5c-3.76 0-6.94-.87-9-2.31V12c0 2.21 4.03 4 9 4s9-1.79 9-4c0-.75-.06-1.74-.13-2.72-2.06 1.38-5.18 2.22-8.87 2.22z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12 9c4.97 0 9-1.79 9-4s-4.03-4-9-4-9 1.79-9 4 4.03 4 9 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDatabaseFilled;
