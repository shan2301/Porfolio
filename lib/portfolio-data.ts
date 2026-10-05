import { projects } from "./projects";

export { projects };

export const profile = {
  name: "Shashank Sundar",
  title: "Technical Delivery Lead",
  subtitle: "Business Analysis · Agile Delivery · Digital Transformation",
  location: "Chennai, India · Open to UK relocation",
  email: "sundarshashank@gmail.com",
  phone: "+91 883-873-1384",
  linkedin: "https://www.linkedin.com/in/shashank2301/",
  linkedinLabel: "linkedin.com/in/shashank2301",
  summary:
    "Technical delivery professional with 6+ years' experience delivering enterprise digital solutions, automation and transformation for international clients across the USA, UK, Canada and Japan. Lead 10+ member multidisciplinary teams as Scrum Master through discovery, requirements, solution design, development, UAT, deployment and continuous improvement — combining business analysis, Agile delivery and Microsoft Power Platform expertise.",
};

export const achievements = [
  "Delivered 15+ enterprise digital solutions supporting 200+ users across the USA, UK, Canada and Japan.",
  "Facilitated 30+ stakeholder and requirements workshops, translating business needs into BRDs, user journeys, process flows and acceptance criteria.",
  "Lead 10+ member multidisciplinary teams and act as Scrum Master across Agile ceremonies, Jira backlogs and delivery governance.",
  "Achieved approximately 40–70% reductions in manual effort across targeted processes through automation and digital solutions.",
  "Reduced selected reporting activities from days to under one hour using Power BI and operational metrics.",
  "Support commercial delivery including tenders, Statements of Work, pricing, MSAs, Work Orders and resource planning.",
];

export const skillGroups = [
  {
    title: "Delivery & Agile",
    skills:
      "End-to-End Delivery, Scrum Master, Sprint Planning, Backlog Management, Risk & Dependency Management, Release Coordination, Continuous Improvement, Jira, Azure DevOps",
  },
  {
    title: "Business Analysis",
    skills:
      "Requirements Elicitation, BRDs, Functional Requirements, User Journeys, Process Flows, Acceptance Criteria, Stakeholder Workshops, Impact Assessment, UAT",
  },
  {
    title: "Client & Commercial",
    skills:
      "Stakeholder Engagement, Client Relationship Management, Tenders, Statements of Work, Pricing & Costing, MSAs, Work Orders, Purchase Orders, Project Reporting",
  },
  {
    title: "Power Platform & Digital",
    skills:
      "Power Apps, Power Automate, Power BI, Dataverse, SharePoint, Power Pages, AI Builder, Copilot Studio, RPA, Microsoft 365",
  },
  {
    title: "Integration & Data",
    skills:
      "SQL, REST APIs, Azure, System Integration, Performance Reporting, Process Improvement, Technical Documentation",
  },
];

export const skillTools = [
  { name: "Jira", icon: "LayoutGrid", color: "#0052CC" },
  { name: "Azure DevOps", icon: "GitBranch", color: "#0078D7" },
  { name: "Power Apps", icon: "LayoutGrid", color: "#742774" },
  { name: "Power Automate", icon: "Workflow", color: "#0066FF" },
  { name: "Power BI", icon: "BarChart3", color: "#F2C811" },
  { name: "SharePoint", icon: "Globe", color: "#038387" },
  { name: "Dataverse", icon: "Database", color: "#742774" },
  { name: "Scrum", icon: "Layers", color: "#16A34A" },
  { name: "SQL", icon: "Table", color: "#CC2927" },
  { name: "REST APIs", icon: "Share2", color: "#0078D4" },
  { name: "Azure", icon: "Cloud", color: "#0078D4" },
  { name: "RPA", icon: "Bot", color: "#0066FF" },
  { name: "Copilot", icon: "Sparkles", color: "#7B61FF" },
  { name: "React", icon: "Atom", color: "#61DAFB" },
  { name: "TypeScript", icon: "Code2", color: "#3178C6" },
  { name: "Teams", icon: "Building2", color: "#6264A7" },
];

export const timelineItems = [
  {
    type: "experience" as const,
    title: "Technical Delivery / Business Analyst",
    organization: "Salem Infotech Pvt. Ltd.",
    location: "Chennai, India",
    period: "July 2022 – Present",
    description:
      "Lead 10+ member multidisciplinary teams and act as Scrum Master across discovery, requirements, solution design, development, UAT, deployment and continuous improvement for international clients. Facilitate 30+ stakeholder workshops; manage Jira/Azure DevOps delivery; support tenders, SOWs, pricing and commercial documentation alongside Power Platform solution delivery.",
  },
  {
    type: "experience" as const,
    title: "Digital Solutions / Business & Systems Analysis",
    organization: "GMS Pvt. Ltd.",
    location: "Chennai, India",
    period: "April 2020 – March 2022",
    description:
      "Contract role analysing business and user needs into functional requirements, workflows and digital solution designs. Produced BRDs, functional specifications and process flows; supported discovery, development coordination, testing and implementation with a user-centred approach.",
  },
  {
    type: "education" as const,
    title: "MSc Aerospace Technologies",
    organization: "University of Nottingham",
    location: "UK",
    period: "2018 – 2019",
    description:
      "Mapping for Engineering Surveying & GIS, Satellite-Based Positioning, Navigation Technologies, Aerospace Systems, Mobile Communications, Human-Computer Systems.",
  },
  {
    type: "education" as const,
    title: "BEng Electrical & Electronics Engineering",
    organization: "Anna University",
    location: "India",
    period: "2013 – 2017",
  },
];

export const certifications = [
  {
    name: "Professional Scrum Master I (PSM I)",
    file: "/images/PSM1.pdf",
    issued: "April 7, 2025",
  },
  {
    name: "Microsoft Applied Skills: Create and Manage Automated Processes by Using Power Automate",
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
    name: "Programming using C & C++",
    file: "/images/C&C++.pdf",
    issued: "November 25, 2013",
  },
];

export const cvDownloads = [
  {
    label: "Technical Delivery Lead",
    file: "/cv/Shashank_Sundar_Senior_Delivery_Manager_-_Informed_Solutions_CV.pdf",
  },
  {
    label: "Senior Delivery Lead",
    file: "/cv/Shashank_Sundar_Senior_Delivery_Lead_-_Red_Badger_CV.pdf",
  },
  {
    label: "Technical Business Analyst",
    file: "/cv/Shashank_Sundar_Business_Analyst_-_CGI_CV.pdf",
  },
  {
    label: "Product Delivery Lead",
    file: "/cv/Shashank_Sundar_Product_Manager_Methods_CV.pdf",
  },
  {
    label: "Account / Commercial Delivery",
    file: "/cv/Shashank_Sundar_Senior_Account_Manager_-_Health_Hippo_CV.pdf",
  },
];
