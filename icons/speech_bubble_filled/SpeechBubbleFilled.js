import * as React from "react";

function SvgSpeechBubbleFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1v22h1l5-5h16V1H1zm17 10H6V8h12v3z" fill="currentColor" />
    </svg>
  );
}

export default SvgSpeechBubbleFilled;
