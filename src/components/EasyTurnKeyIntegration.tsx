import React, { useEffect, useState, useRef } from "react";
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

  const leftProjectRef = useRef<HTMLDivElement | null>(null);
  const rightProjectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateImagePosition = () => {
      if (leftProjectRef.current && rightProjectRef.current) {
        const leftRect = leftProjectRef.current.getBoundingClientRect();
        const rightRect = rightProjectRef.current.getBoundingClientRect();

        const leftImage = document.getElementById("leftImage");
        const rightImage = document.getElementById("rightImage");

        if (leftImage) {
          leftImage.style.left = `${leftRect.left + 276 + window.scrollX}px`;
          leftImage.style.top = `${leftRect.top - 530 + window.scrollY}px`;
        }

        if (rightImage) {
          rightImage.style.left = `${
            rightRect.right - 475.5 + window.scrollX
          }px`;
          rightImage.style.top = `${rightRect.top - 530 + window.scrollY}px`;
        }
      }
    };

    updateImagePosition();
    window.addEventListener("resize", updateImagePosition);
    window.addEventListener("scroll", updateImagePosition);
    return () => {
      window.removeEventListener("resize", updateImagePosition);
      window.removeEventListener("scroll", updateImagePosition);
    };
  }, []);

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

  const getLineColor = (projectName: ProjectName) =>
    checkedState[projectName] ? "#4CAF50" : "#E5D2E8";

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
      <div className="relative flex flex-col lg:flex-row lg:justify-center items-center gap-[120px] lg:items-start w-full px-[10px] lg:mt-[50px]">
        <div className="relative flex flex-col lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-end lg:items-center lg:order-1">
          {projects.slice(0, 3).map((project, index) => (
            <div ref={leftProjectRef} key={index}>
              <ProjectCard
                project={project}
                isChecked={checkedState[project.name as ProjectName]}
                onCheckboxChange={() =>
                  handleCheckboxChange(project.name as ProjectName)
                }
              />
            </div>
          ))}
        </div>
        <div className="relative bg-custom-bg max-w-[323px] min-w-[323px] lg:max-w-[380px] lg:h-[268px] shadow-lg rounded-3xl p-8 mx-4 text-center flex flex-col items-center mt-10 lg:mt-9 lg:order-2 border-2 border-custom-purple">
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
        <div className="relative flex flex-col items-center lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-start lg:items-center lg:order-3">
          {projects.slice(3).map((project, index) => (
            <div ref={rightProjectRef} key={index}>
              <ProjectCard
                project={project}
                isChecked={checkedState[project.name as ProjectName]}
                onCheckboxChange={() =>
                  handleCheckboxChange(project.name as ProjectName)
                }
              />
            </div>
          ))}
        </div>
        <img
          id="leftImage"
          style={{ width: "200px", height: "250px", position: "absolute" }}
          src="src/assets/left-lines.svg"
          className={`absolute hidden lg:block h-auto ${getLineColor(
            "Zenefits"
          )}`}
          alt="Left Connections"
        />

        <img
          id="rightImage"
          style={{ width: "200px", height: "250px", position: "absolute" }}
          src="src/assets/right-lines.svg"
          className={`absolute hidden lg:block h-auto ${getLineColor(
            "Sapling"
          )}`}
          alt="Right Connections"
        />
      </div>
    </div>
  );
};

export default EasyTurnKeyIntegration;
