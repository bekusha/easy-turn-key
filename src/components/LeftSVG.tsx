import React from "react";

type ProjectName = "Zenefits" | "Sapling" | "Workday";

interface LeftSVGProps {
  getColor: (projectName: ProjectName) => string;
}

const LeftSVG: React.FC<LeftSVGProps> = ({ getColor }) => {
  return (
    <svg
      id="leftImage"
      width="125"
      height="160"
      viewBox="0 0 125 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "200px",
        height: "220px",
        position: "absolute",
      }}>
      <path
        id="leftLine3"
        d="M124.515 78.5125H0"
        stroke={getColor("Workday")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
      <path
        id="leftLine2"
        d="M124.008 79H76.6552C65.6095 79 56.6552 87.9543 56.6552 99V139C56.6552 150.046 47.7009 159 36.6552 159H0"
        stroke={getColor("Sapling")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
      <path
        id="leftLine1"
        d="M125 78.5125H76.1395C65.0938 78.5125 56.1395 69.5582 56.1395 58.5125V21C56.1395 9.95432 47.1852 1 36.1395 1H0.857086"
        stroke={getColor("Zenefits")}
        strokeWidth="2"
        style={{
          transition: "stroke 0.4s ease-in-out",
        }}
      />
    </svg>
  );
};

export default LeftSVG;
