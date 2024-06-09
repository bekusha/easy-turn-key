import React, { useState, useEffect } from "react";
import { ProjectName } from "../types";

interface LeftSVGProps {
  getColor: (projectName: ProjectName) => string;
  activeProject: ProjectName; // Add activeProject prop
}

const LeftSVG: React.FC<LeftSVGProps> = ({ getColor, activeProject }) => {
  const [activeLine, setActiveLine] = useState<ProjectName>(activeProject);

  useEffect(() => {
    setActiveLine(activeProject);
  }, [activeProject]);

  const lines = [
    {
      id: "leftLine1",
      d: "M125 78.5125H76.1395C65.0938 78.5125 56.1395 69.5582 56.1395 58.5125V21C56.1395 9.95432 47.1852 1 36.1395 1H0.857086",
      projectName: "Zenefits" as ProjectName,
    },
    {
      id: "leftLine2",
      d: "M124.008 79H76.6552C65.6095 79 56.6552 87.9543 56.6552 99V139C56.6552 150.046 47.7009 159 36.6552 159H0",
      projectName: "Sapling" as ProjectName,
    },
    {
      id: "leftLine3",
      d: "M124.515 78.5125H0",
      projectName: "Workday" as ProjectName,
    },
  ];

  const sortedLines = [...lines].sort((a, b) =>
    a.projectName === activeLine ? 1 : b.projectName === activeLine ? -1 : 0
  );

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
      {sortedLines.map((line) => (
        <path
          key={line.id}
          id={line.id}
          d={line.d}
          stroke={getColor(line.projectName)}
          strokeWidth="2"
          style={{
            transition: "stroke 0.4s ease-in-out",
          }}
        />
      ))}
    </svg>
  );
};

export default LeftSVG;
