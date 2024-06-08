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
import LeftSVG from "./LeftSVG";
import RightSVG from "./RightSVG";

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
          leftImage.style.left = `${leftRect.left + 266 + window.scrollX}px`;
          leftImage.style.top = `${leftRect.top - 430 + window.scrollY}px`;
        }

        if (rightImage) {
          rightImage.style.left = `${
            rightRect.right - 465.5 + window.scrollX
          }px`;
          rightImage.style.top = `${rightRect.top - 430 + window.scrollY}px`;
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

  const getColor = (projectName: ProjectName) =>
    checkedState[projectName]
      ? "rgba(157, 113, 253, 1)"
      : "rgba(210, 197, 254, 1)";

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

  return (
    <div className="flex flex-col items-center py-8 text-center mb-4 lg:max-w-[100rem]">
      <h2 className="text-4xl font-bold mb-4 px-[26px] font-poppins leading-8 tracking-wide">
        <b>Easy Turn-Key Integration</b>
      </h2>
      <p className="text-gray-500 text-center max-w-2xl leading-6.5 font-normal text-base px-[26px] tracking-normal">
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <div className="relative flex flex-col lg:flex-row lg:justify-center items-center md:gap-[20px] lg:items-start w-full px-[10px] lg:mt-[50px]">
        <div className="relative flex flex-col lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-end lg:items-center order-2 lg:order-1">
          {projects.slice(0, 3).map((project, index) => (
            <div
              ref={leftProjectRef}
              key={index}
              className="lg:block w-full lg:w-auto ">
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
        <div className="relative bg-custom-bg max-w-[323px] min-w-[280px] lg:min-h-[268px] lg:max-w-[380px] shadow-lg rounded-3xl p-5 pt-9 lg:mx-[9rem] text-center flex flex-col items-center mt-[64px] lg:mt-7 order-1 mb-8 lg:order-2 border-2 border-custom-purple">
          <img
            className="w-[86px] h-[86px] mx-auto mb-4 absolute -top-[50px]"
            src={wmnImg}
            alt="Lauren Robson"
          />
          <h3 className="text-lg font-bold pt-[20px] mb-[6px]">
            Lauren Robson
          </h3>
          <p className="text-gray-500 mt-2">HR Director</p>
          <p className="text-gray-700 mt-4 tracking-normal">
            "I want to lower PTO liability and keep my employees happy. I want
            to lower PTO liability."
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-start lg:items-center order-3 lg:order-2">
          {projects.slice(3).map((project, index) => (
            <div
              ref={rightProjectRef}
              key={index}
              className="lg:block w-full lg:w-auto">
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
        <div className="hidden lg:block">
          <LeftSVG getColor={getColor} />
          <RightSVG getColor={getColor} />
        </div>
      </div>
    </div>
  );
};

export default EasyTurnKeyIntegration;
