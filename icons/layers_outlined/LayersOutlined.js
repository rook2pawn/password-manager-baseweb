import * as React from "react";

function SvgLayersOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19.44l-8.94-6.22L.5 15 12 23l11.5-8-2.56-1.78L12 19.44z"
        fill="currentColor"
      />
      {","}
      <path
        d="M23.5 9L12 1 .5 9 12 17l11.5-8zM12 4.41L18.6 9 12 13.59 5.4 9 12 4.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLayersOutlined;
