import * as React from "react";

function SvgFireFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1S3 8 3 14c0 3.91 2.04 6.8 5 8.15v-.65c0-4.5 4-7 4-7s4 2.5 4 7v.65c2.96-1.35 5-4.24 5-8.15 0-6-9-13-9-13z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFireFilled;
