import zenefits from "../assets/zenefits.png";
import expensify from "../assets/expensify.png";
import rippling from "../assets/ripling.png";
import sapling from "../assets/sapling.png";
import workday from "../assets/w.png";
import xero from "../assets/xero.png";

export type ProjectName =
  | "Zenefits"
  | "Sapling"
  | "Workday"
  | "Xero"
  | "Rippling"
  | "Expensify";

export type TabId = "smallBusiness" | "mediumBusiness" | "enterprise";

export const tabs: { id: TabId; label: string }[] = [
  { id: "smallBusiness", label: "Small Business" },
  { id: "mediumBusiness", label: "Medium Business" },
  { id: "enterprise", label: "Enterprise" },
];

export const projects = [
  { name: "Zenefits", icon: zenefits, type: "HR Management" },
  { name: "Sapling", icon: sapling, type: "HR Management" },
  { name: "Workday", icon: workday, type: "HR Management" },
  { name: "Xero", icon: xero, type: "Employee Base" },
  { name: "Rippling", icon: rippling, type: "Salary Management" },
  { name: "Expensify", icon: expensify, type: "Expense Management" },
];

export const defaultCheckedState: Record<TabId, Record<ProjectName, boolean>> = {
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
