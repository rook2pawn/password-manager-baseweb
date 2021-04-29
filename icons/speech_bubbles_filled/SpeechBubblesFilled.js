import * as React from "react";

function SvgSpeechBubblesFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8V1h13v13h-1l-6-6h-6zM2.5 23H1V10h13v10H5.5l-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSpeechBubblesFilled;
