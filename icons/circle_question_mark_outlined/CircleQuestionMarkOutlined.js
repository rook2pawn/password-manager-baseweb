import * as React from "react";

function SvgCircleQuestionMarkOutlined(props) {
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
      <path d="M13 16h-3v2h3v-2z" fill="currentColor" />
      {","}
      <path
        d="M12 6c-1.9 0-3.5 1.3-3.9 3.2l2.9.6c.1-.5.5-.8 1-.8s1 .5 1 1c0 .4-.2.7-.6.9L10 12.1v3h3v-1l.7-.3c1.4-.7 2.3-2.1 2.3-3.6C16 7.8 14.2 6 12 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleQuestionMarkOutlined;
