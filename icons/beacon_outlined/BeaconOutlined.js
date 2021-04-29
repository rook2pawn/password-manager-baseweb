import * as React from "react";

function SvgBeaconOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 3H1v15h6v3h10v-3h6V3h-5zm-3 3v4H9V6h6zm5 9H4V6h2v7h12V6h2v9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBeaconOutlined;
