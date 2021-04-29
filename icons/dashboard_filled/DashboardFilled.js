import * as React from "react";

function SvgDashboardFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 2H2v7h7V2z" fill="currentColor" />
      {","}
      <path d="M22 2H11v7h11V2z" fill="currentColor" />
      {","}
      <path d="M14 11H2v11h12V11z" fill="currentColor" />
      {","}
      <path d="M22 11h-6v11h6V11z" fill="currentColor" />
    </svg>
  );
}

export default SvgDashboardFilled;
