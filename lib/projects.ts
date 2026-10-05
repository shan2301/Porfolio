export interface TimelinePhase {
  week: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  techStack: string[];
  impact: string[];
  timeline: TimelinePhase[];
}

export const projects: Project[] = [
  {
    id: "ntn-order-approval-automation",
    title: "Order & Approval Automation",
    client: "NTN Americas (USA, Japan)",
    problem: "Manual order tracking and multi-level approvals slowed operations and limited visibility for management across regions.",
    solution: "Led discovery and requirements workshops with USA/Japan stakeholders, translated needs into prioritised backlog and acceptance criteria, and delivered Canvas Power Apps with SharePoint Online and Power Automate for multi-level approvals, role-based access and notifications — plus Power BI embedded KPI reporting.",
    role: "Technical Delivery / Business Analyst",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Power Automate", "SharePoint Online", "Power BI", "Jira", "Agile"],
    impact: [
      "Reduced approval and tracking time by 50%",
      "Clear requirements-to-delivery path across multi-region stakeholders"
    ],
    timeline: [
      { week: "Phase 1", title: "Discovery", description: "Stakeholder workshops mapping order tracking and multi-level approval requirements" },
      { week: "Phase 2", title: "Requirements", description: "BRDs, process flows, approval matrix and acceptance criteria" },
      { week: "Phase 3", title: "Delivery", description: "Coordinated Power Apps, Power Automate and SharePoint build with development team" },
      { week: "Phase 4", title: "UAT", description: "Facilitated UAT, defect triage and stakeholder sign-off" },
      { week: "Phase 5", title: "Release", description: "Deployment, Hyper-Care and continuous improvement" }
    ]
  },
  {
    id: "gw-order-management-platform",
    title: "Order Management Platform",
    client: "G&W Electric (USA, Canada)",
    problem: "Order tracking, approvals and process visibility were fragmented, limiting production efficiency and external submission capability.",
    solution: "Framed the problem with client stakeholders, prioritised scope across internal and external journeys, and delivered a Power Apps / Power Automate / SharePoint platform with Power Pages for external submission and Power BI KPI reporting.",
    role: "Technical Delivery / Business Analyst",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Power Pages", "Power BI", "Azure DevOps"],
    impact: [
      "Increased production efficiency by 38%",
      "Unified internal workflows with external portal submission"
    ],
    timeline: [
      { week: "Phase 1", title: "Discovery", description: "Captured order management, approval and portal requirements with USA/Canada stakeholders" },
      { week: "Phase 2", title: "Design", description: "Solution design, role-based workflow model and delivery plan" },
      { week: "Phase 3", title: "Delivery", description: "Led multidisciplinary delivery of apps, automations and SharePoint foundations" },
      { week: "Phase 4", title: "Integration", description: "Power Pages external submission and Power BI KPI reporting" },
      { week: "Phase 5", title: "UAT & Rollout", description: "Testing, release coordination and operational readiness" }
    ]
  },
  {
    id: "ennvee-employee-management",
    title: "Employee Management System",
    client: "Ennvee Technogrup (USA)",
    problem: "Employee onboarding, KPI tracking, leave and timesheet processes lacked a unified system and clear performance visibility.",
    solution: "Ran requirements workshops for onboarding and lifecycle processes, defined Dataverse schema and role-based access, and delivered a Power App with Power Automate lifecycle automations and Power BI performance dashboards.",
    role: "Technical Delivery / Business Analyst",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "DAX", "Jira"],
    impact: [
      "Streamlined employee lifecycle management",
      "Improved performance visibility through Power BI dashboards"
    ],
    timeline: [
      { week: "Phase 1", title: "Requirements", description: "Workshops covering onboarding, KPI, leave and timesheet processes" },
      { week: "Phase 2", title: "Design", description: "Dataverse schema, role-based access and KPI model" },
      { week: "Phase 3", title: "Delivery", description: "Power Apps UI and Power Automate lifecycle automations" },
      { week: "Phase 4", title: "Analytics", description: "Power BI dashboards with DAX and data modelling" },
      { week: "Phase 5", title: "Release", description: "UAT, go-live and user enablement" }
    ]
  },
  {
    id: "bunzl-invoice-processing",
    title: "Invoice Processing Automation",
    client: "Bunzl (UK)",
    problem: "Manual invoice processing, approvals and payment workflows created delays and exception handling overhead with JD Edwards ERP.",
    solution: "Analysed invoice and payment processes, defined exception handling and API integration requirements, and delivered Power Automate integrations with JD Edwards alongside Power Apps tracking and Power BI reporting.",
    role: "Technical Delivery / Business Analyst",
    duration: "Enterprise delivery",
    techStack: ["Power Automate", "Power Apps", "Power BI", "JD Edwards", "REST APIs", "Azure DevOps"],
    impact: [
      "Reduced invoice processing time by 65%",
      "Improved exception handling and operational visibility"
    ],
    timeline: [
      { week: "Phase 1", title: "Analysis", description: "Mapped invoice, approval and payment workflows against JD Edwards" },
      { week: "Phase 2", title: "Requirements", description: "Automation design, exception handling and API integration approach" },
      { week: "Phase 3", title: "Delivery", description: "Power Automate flows, Power Apps tracking and ERP integrations" },
      { week: "Phase 4", title: "Reporting", description: "Power BI reporting and end-to-end exception handling" },
      { week: "Phase 5", title: "UAT & Release", description: "UAT, production release and Hyper-Care support" }
    ]
  },
  {
    id: "kehe-rpa-order-automation",
    title: "RPA Order Automation",
    client: "KeHE Distributors (USA)",
    problem: "Legacy order processing, inventory, approvals and batch allocation relied on manual effort across Excel, MS Access and SharePoint.",
    solution: "Scoped RPA opportunities with operations stakeholders, designed desktop-flow architecture with scheduling and exception handling, and delivered Power Automate Desktop bots integrating Excel, Access and SharePoint.",
    role: "Technical Delivery / Business Analyst",
    duration: "Enterprise delivery",
    techStack: ["Power Automate Desktop", "RPA", "Excel", "MS Access", "SharePoint", "Agile"],
    impact: [
      "Improved operational efficiency by 53%",
      "Reduced manual processing across legacy order workflows"
    ],
    timeline: [
      { week: "Phase 1", title: "Scope Definition", description: "Identified RPA scope across order, inventory, approval and batch allocation" },
      { week: "Phase 2", title: "Architecture Design", description: "Desktop flow architecture, scheduling and exception handling" },
      { week: "Phase 3", title: "Delivery", description: "Power Automate Desktop bots integrating Excel, Access and SharePoint" },
      { week: "Phase 4", title: "Testing", description: "High-volume validation, failure handling and retry scenarios" },
      { week: "Phase 5", title: "Deployment", description: "Production deployment, monitoring and operational handover" }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
