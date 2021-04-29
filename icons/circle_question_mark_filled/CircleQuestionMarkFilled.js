import * as React from "react";

function SvgCircleQuestionMarkFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm1 19h-3v-3h3v3zm.9-6.4l-.9.4v1h-3v-3l2.8-1.2c.8-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.8 2.2-5 5-5s5 2.2 5 5c0 2-1.2 3.8-3.1 4.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleQuestionMarkFilled;
