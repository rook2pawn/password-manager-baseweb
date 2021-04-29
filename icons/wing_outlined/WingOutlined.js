import * as React from "react";

function SvgWingOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.25 10.87c-3.1 1.79-4.17 5.78-2.38 8.88C3.03 21.75 5.18 23 7.5 23c1.14 0 2.26-.3 3.25-.87L17 18.52v-3.46l-7.75 4.47a3.499 3.499 0 01-4.78-1.28 3.498 3.498 0 011.28-4.78L21 4.67V1.2L4.25 10.87z"
        fill="currentColor"
      />
      {","}
      <path
        d="M6.2 17.25a1.502 1.502 0 002.05.55L19 11.59V8.13L6.75 15.2c-.72.42-.96 1.33-.55 2.05z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWingOutlined;
