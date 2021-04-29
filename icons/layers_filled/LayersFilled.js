import * as React from "react";

function SvgLayersFilled(props) {
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
      <path d="M12 17l11.5-8L12 1 .5 9 12 17z" fill="currentColor" />
    </svg>
  );
}

export default SvgLayersFilled;
