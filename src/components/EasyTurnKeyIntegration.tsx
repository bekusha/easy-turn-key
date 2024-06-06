import React, { useEffect, useState } from "react";
import wmnImg from "../assets/image.png";
import zenefits from "../assets/zenefits.png";
import expensify from "../assets/expensify.png";
import rippling from "../assets/ripling.png";
import sapling from "../assets/sapling.png";
import workday from "../assets/w.png";
import xero from "../assets/xero.png";
import Tabs from "./TabsComponent";
import ProjectCard from "./ProjectCardComponent";

type ProjectName =
  | "Zenefits"
  | "Sapling"
  | "Workday"
  | "Xero"
  | "Rippling"
  | "Expensify";
type TabId = "smallBusiness" | "mediumBusiness" | "enterprise";

const EasyTurnKeyIntegration: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>("mediumBusiness");
  const [checkedState, setCheckedState] = useState<
    Record<ProjectName, boolean>
  >({
    Zenefits: false,
    Sapling: true,
    Workday: true,
    Xero: true,
    Rippling: false,
    Expensify: false,
  });

  const tabs: { id: TabId; label: string }[] = [
    { id: "smallBusiness", label: "Small Business" },
    { id: "mediumBusiness", label: "Medium Business" },
    { id: "enterprise", label: "Enterprise" },
  ];

  const projects = [
    { name: "Zenefits", icon: zenefits, type: "HR Management" },
    { name: "Sapling", icon: sapling, type: "HR Management" },
    { name: "Workday", icon: workday, type: "HR Management" },
    { name: "Xero", icon: xero, type: "Employee Base" },
    { name: "Rippling", icon: rippling, type: "Salary Management" },
    { name: "Expensify", icon: expensify, type: "Expense Management" },
  ];

  const defaultCheckedState: Record<TabId, Record<ProjectName, boolean>> = {
    smallBusiness: {
      Zenefits: true,
      Sapling: false,
      Workday: false,
      Xero: false,
      Rippling: false,
      Expensify: false,
    },
    mediumBusiness: {
      Zenefits: false,
      Sapling: true,
      Workday: true,
      Xero: true,
      Rippling: false,
      Expensify: false,
    },
    enterprise: {
      Zenefits: false,
      Sapling: false,
      Workday: false,
      Xero: false,
      Rippling: true,
      Expensify: true,
    },
  };

  useEffect(() => {});

  const handleTabChange = (tabId: TabId) => {
    setSelectedTab(tabId);
    setCheckedState(defaultCheckedState[tabId]);
  };

  const handleCheckboxChange = (projectName: ProjectName) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [projectName]: !prevState[projectName],
    }));
  };

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <h2 className="text-3xl font-bold mb-4 mt-[50px] px-[26px] font-poppins">
        <b>Easy Turn-Key Integration</b>
      </h2>
      <p className="text-gray-500 text-center max-w-2xl leading-6.5 font-normal text-base px-[26px]">
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <div className="flex flex-col justify-center items-center w-full px-[10px]">
        <div className="bg-custom-bg  shadow-lg rounded-3xl p-8 mx-4 text-center flex flex-col items-center relative mt-10 border-2 border-custom-purple">
          <img
            className="w-[86px] h-[86px] mx-auto mb-4 absolute -top-[50px]"
            src={wmnImg}
            alt="Lauren Robson"
          />
          <h3 className="text-lg font-bold pt-[20px] mb-[6px]">
            Lauren Robson
          </h3>
          <p className="text-gray-500 mt-2">HR Director</p>
          <p className="text-gray-700 mt-4">
            "I want to lower PTO liability and keep my employees happy. I want
            to lower PTO liability."
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center pl-4 mr-5 mt-[20px] mb-[10px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isChecked={checkedState[project.name as ProjectName]}
              onCheckboxChange={() =>
                handleCheckboxChange(project.name as ProjectName)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EasyTurnKeyIntegration;
