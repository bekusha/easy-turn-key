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
    <div className="mt-[30px] lg:mb-5  flex flex-row sm:flex-row md:space-x-2  border-b-2 md:border-b-0 border-gray-200 font-bold text-sm gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`relative rounded-xl px-2.5 py-2.5 md:border ${
            selectedTab === tab.id
              ? "text-custom-purple md:bg-custom-purple md:text-white "
              : "text-gray-500 md:bg-white md:text-gray-600"
          }`}
          onClick={() => onTabChange(tab.id)}>
          {tab.label}
          {selectedTab === tab.id && (
            <div className="absolute -bottom-[2px] left-0 w-full h-0.5 bg-custom-purple md:hidden"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
