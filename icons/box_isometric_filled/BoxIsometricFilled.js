import * as React from "react";

function SvgBoxIsometricFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 18l10 5v-9.88l-10-5V18z" fill="currentColor" />
      {","}
      <path
        d="M12 1.5L2.12 6.44 12 11.38l9.88-4.94L12 1.5z"
        fill="currentColor"
      />
      {","}
      <path d="M13 13.12V23l10-5V8.12l-10 5z" fill="currentColor" />
    </svg>
  );
}

export default SvgBoxIsometricFilled;
