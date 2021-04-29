import * as React from "react";

function SvgCarDropoffFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M20.7 9h-3.5l2.2-3H15V3h4.4l-2.2-3h3.5L24 4.5 20.7 9z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.2 7l-1.3 4h15.4l.7 2v9h-4v-2H5v2H1v-9H0v-3h2l1.5-4.6c.3-.9 1-1.4 1.9-1.4H13v3H6.2zM4 17h4v-2H4v2zm10 0h4v-2h-4v2z"
        />
      </g>
    </svg>
  );
}

export default SvgCarDropoffFilled;
