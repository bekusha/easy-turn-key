import React from "react";

type TabId = "smallBusiness" | "mediumBusiness" | "enterprise";

type Tab = {
  id: TabId;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTab: TabId;
  onTabChange: (tabId: TabId) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="mt-[30px] flex flex-row sm:flex-row md:space-x-4 mb-10 border-b-2 border-gray-200 font-bold text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`relative px-3.5 py-2 ${
            selectedTab === tab.id
              ? "text-purple-500 md:bg-purple-600 md:text-white"
              : "text-gray-500 md:bg-white md:text-gray-600"
          }`}
          onClick={() => onTabChange(tab.id)}>
          {tab.label}
          {selectedTab === tab.id && (
            <div className="absolute -bottom-[2px] left-0 w-full h-0.5 bg-custom-purple"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
