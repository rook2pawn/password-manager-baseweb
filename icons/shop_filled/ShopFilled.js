import * as React from "react";

function SvgShopFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 8V6c0-3.3-2.7-6-6-6S6 2.7 6 6v2H1l3 15h16l3-15h-5zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShopFilled;
