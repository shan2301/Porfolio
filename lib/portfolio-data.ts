import { projects } from "./projects";

export { projects };

export const achievements = [
  "Delivered 15+ enterprise Power Platform and Microsoft 365 solutions for global clients across the USA, UK, Canada and Japan.",
  "Designed Power Apps, Power Automate, SharePoint and Dataverse solutions supporting 200+ users and monitored 11+ production workflows/applications.",
  "Delivered Power BI reporting and analytics solutions reducing reporting cycles by up to 90%, including embedded reporting within business applications.",
  "Implemented Power Platform ALM, governance, DLP, role-based security and Dev/Test/Prod environment management using Azure DevOps.",
  "Delivered automation and RPA solutions reducing manual processing effort by up to 70%, including ERP and legacy-system integrations.",
];

export const skillGroups = [
  {
    title: "Power Platform",
    skills:
      "Power Apps, Power Automate, Power Pages, Dataverse, Power Fx, AI Builder, Copilot, Copilot Studio, ALM, DLP",
  },
  {
    title: "SharePoint / M365",
    skills:
      "SharePoint Online, SPFx, React.js, TypeScript, Fluent UI, Teams, Migration, ShareGate, Purview, Entra ID",
  },
  {
    title: "Power BI",
    skills:
      "DAX, Power Query, Data Modelling, Analysis Services, KPI Scorecards, Embedded Analytics, Power BI API",
  },
  {
    title: "Integration / Azure",
    skills:
      "Microsoft Graph API, Azure Functions, Azure Logic Apps, Dynamics 365, SAP, SQL, REST/JSON",
  },
  {
    title: "Delivery",
    skills:
      "Requirements, Solution Design, UAT, Azure DevOps, CI/CD, Hyper-Care, Production Support, Agile/Scrum",
  },
];

export const skillTools = [
  { name: "Power Apps", icon: "LayoutGrid", color: "#742774" },
  { name: "Power Automate", icon: "Workflow", color: "#0066FF" },
  { name: "SharePoint", icon: "Globe", color: "#038387" },
  { name: "Power BI", icon: "BarChart3", color: "#F2C811" },
  { name: "Dataverse", icon: "Database", color: "#742774" },
  { name: "Azure", icon: "Cloud", color: "#0078D4" },
  { name: "React", icon: "Atom", color: "#61DAFB" },
  { name: "TypeScript", icon: "Code2", color: "#3178C6" },
  { name: "SPFx", icon: "Layers", color: "#038387" },
  { name: "Graph API", icon: "Share2", color: "#0078D4" },
  { name: "Dynamics 365", icon: "Building2", color: "#002050" },
  { name: "SAP", icon: "Boxes", color: "#0FAAFF" },
  { name: "RPA", icon: "Bot", color: "#0066FF" },
  { name: "SQL", icon: "Table", color: "#CC2927" },
  { name: "DevOps", icon: "GitBranch", color: "#0078D7" },
  { name: "Copilot", icon: "Sparkles", color: "#7B61FF" },
];

export const timelineItems = [
  {
    type: "experience" as const,
    title: "Power Platform Developer",
    organization: "Salem Infotech Pvt. Ltd.",
    location: "Chennai, India",
    period: "July 2022 – Present",
    description:
      "Enterprise Power Apps, Power Automate, Power Pages, SharePoint, SPFx, and Power BI with Azure integrations, ALM, and production support for global clients.",
  },
  {
    type: "experience" as const,
    title: "Business Automation Consultant",
    organization: "GMS Pvt. Ltd.",
    location: "Chennai, India",
    period: "April 2020 – March 2022",
    description:
      "Power Apps and Power Automate for order management, invoicing, inventory; RPA workflows and enterprise integrations.",
  },
  {
    type: "education" as const,
    title: "MSc Aerospace Technologies",
    organization: "University of Nottingham",
    location: "UK",
    period: "2018 – 2019",
  },
  {
    type: "education" as const,
    title: "BE Electrical & Electronics Engineering",
    organization: "Anna University",
    location: "India",
    period: "2013 – 2017",
  },
];

export const certifications = [
  {
    name: "Microsoft Applied Skills: Power Automate",
    file: "/images/Credentials - shashanks-8473 _ Microsoft Learn.pdf",
    issued: null as string | null,
  },
  {
    name: "Salesforce Administrator",
    file: "/images/SFAdmin.pdf",
    issued: "May 24, 2023",
  },
  {
    name: "Salesforce Associate",
    file: "/images/SF_Associate.pdf",
    issued: null as string | null,
  },
  {
    name: "Professional Scrum Master I",
    file: "/images/PSM1.pdf",
    issued: "April 7, 2025",
  },
  {
    name: "Programming using C & C++",
    file: "/images/C&C++.pdf",
    issued: "November 25, 2013",
  },
];
