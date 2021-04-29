import * as React from "react";

function SvgFolderFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.5 6l-3-3H1v18h22V6H12.5z" fill="currentColor" />
    </svg>
  );
}

export default SvgFolderFilled;
