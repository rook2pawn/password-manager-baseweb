import * as React from "react";

function SvgCircleChevronRightOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 19c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        fill="currentColor"
      />
      {","}
      <path d="M9 7l3.9 5L9 17h3.6l3.9-5-3.9-5H9z" fill="currentColor" />
    </svg>
  );
}

export default SvgCircleChevronRightOutlined;
