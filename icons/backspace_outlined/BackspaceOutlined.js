import * as React from "react";

function SvgBackspaceOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 3L0 12l8.5 9H24V3H8.5zM21 18H9.56l-5.67-6 5.67-6H21v12z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12.49 16.49L15 13.98l2.51 2.51 1.98-1.98L16.98 12l2.51-2.51-1.98-1.98L15 10.02l-2.51-2.51-1.98 1.98L13.02 12l-2.51 2.51 1.98 1.98z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBackspaceOutlined;
