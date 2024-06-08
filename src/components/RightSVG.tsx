import React from "react";

type ProjectName = "Xero" | "Rippling" | "Expensify";

interface RightSVGProps {
  getColor: (projectName: ProjectName) => string;
}

const RightSVG: React.FC<RightSVGProps> = ({ getColor }) => {
  return (
    <svg
      id="rightImage"
      width="125"
      height="160"
      viewBox="0 0 125 160"
      style={{
        width: "200px",
        height: "220px",
        position: "absolute",
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="rightLine3"
        d="M0.484924 78.5125H125"
        stroke={getColor("Expensify")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
      <path
        id="rightLine2"
        d="M0.992249 79H48.3448C59.3905 79 68.3448 87.9543 68.3448 99V139C68.3448 150.046 77.2991 159 88.3448 159H125"
        stroke={getColor("Rippling")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
      <path
        id="rightLine1"
        d="M-7.62939e-06 78.5125H48.8605C59.9062 78.5125 68.8605 69.5582 68.8605 58.5125V21C68.8605 9.95432 77.8148 1 88.8605 1H124.143"
        stroke={getColor("Xero")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
    </svg>
  );
};

export default RightSVG;
