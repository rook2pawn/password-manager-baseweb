import * as React from "react";

function SvgWarehouseFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1L1 6v17h22V6L12 1zm7 10v3H5v-3h14zM5 20v-3h14v3H5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWarehouseFilled;
