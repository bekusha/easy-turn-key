import React from "react";

type Project = {
  name: string;
  icon: string;
  type: string;
};

type ProjectCardProps = {
  project: Project;
  isChecked: boolean;
  onCheckboxChange: () => void;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div
      className={`flex  items-center mb-4  border-2 rounded-xl p-[15px] text-start w-[324px] lg:w-[280px] h-[80px]  ${
        isChecked ? "border-custom-purple" : "border-gray-300"
      }`}>
      <div className="flex justify-start items-center space-x-2">
        <img className="w-12 h-12" src={project.icon} alt={project.name} />
        <div className="pr-12 pl-3 flex flex-col items-start">
          <p className="text-base font-medium">{project.name}</p>
          <p className="text-gray-500 font-normal text-xs">{project.type}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer ml-auto">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <div className="w-8 h-4 bg-white border-2 border-gray-300 rounded-full peer  peer-checked:bg-purple-600 peer-checked:border-purple-600 after:content-[''] after:absolute after:top-1/2 after:left-[2px] after:bg-gray-300 after:peer-checked:bg-white after:peer-checked:left-4 after:border after:border-gray-300  after:rounded-full after:h-2 after:w-2 after:peer-checked:h-3 after:peer-checked:w-3 after:transition-all after:-translate-y-1/2"></div>
      </label>
    </div>
  );
};

export default ProjectCard;
