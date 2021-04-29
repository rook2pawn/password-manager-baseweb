import * as React from "react";

function SvgArrowDropoffOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 23a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path
        d="M13.5 12.67V2h-3v10.67L5 8.64v3.47l7 5.12 7-5.12V8.64l-5.5 4.03z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowDropoffOutlined;
