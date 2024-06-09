import React, { useState, useEffect } from "react";
import { ProjectName } from "../types";

interface RightSVGProps {
  getColor: (projectName: ProjectName) => string;
  activeProject: ProjectName; // Add activeProject prop
}

const RightSVG: React.FC<RightSVGProps> = ({ getColor, activeProject }) => {
  const [activeLine, setActiveLine] = useState<ProjectName>(activeProject);

  useEffect(() => {
    setActiveLine(activeProject);
  }, [activeProject]);

  const lines = [
    {
      id: "rightLine1",
      d: "M-7.62939e-06 78.5125H48.8605C59.9062 78.5125 68.8605 69.5582 68.8605 58.5125V21C68.8605 9.95432 77.8148 1 88.8605 1H124.143",
      projectName: "Xero" as ProjectName,
    },
    {
      id: "rightLine2",
      d: "M0.992249 79H48.3448C59.3905 79 68.3448 87.9543 68.3448 99V139C68.3448 150.046 77.2991 159 88.3448 159H125",
      projectName: "Rippling" as ProjectName,
    },
    {
      id: "rightLine3",
      d: "M0.484924 78.5125H125",
      projectName: "Expensify" as ProjectName,
    },
  ];

  const sortedLines = [...lines].sort((a, b) =>
    a.projectName === activeLine ? 1 : b.projectName === activeLine ? -1 : 0
  );

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
      {sortedLines.map((line) => (
        <path
          key={line.id}
          id={line.id}
          d={line.d}
          stroke={getColor(line.projectName)}
          strokeWidth="2"
          style={{
            transition: "stroke 0.3s ease-in-out",
          }}
        />
      ))}
    </svg>
  );
};

export default RightSVG;
