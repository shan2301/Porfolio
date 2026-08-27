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
    solution: "Developed Canvas Power Apps with SharePoint Online and Power Automate for order tracking, multi-level approvals, role-based access and notifications. Built Power BI dashboards and embedded reporting for operational KPIs; integrated Microsoft 365 and enterprise data through connectors and REST/JSON.",
    role: "Power Platform Developer",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Power Automate", "SharePoint Online", "Power BI", "REST/JSON", "Microsoft 365"],
    impact: [
      "Reduced approval and tracking time by 50%"
    ],
    timeline: [
      { week: "Phase 1", title: "Analysis", description: "Mapped order tracking and multi-level approval requirements across USA and Japan stakeholders" },
      { week: "Phase 2", title: "Design", description: "Designed Canvas app UX, SharePoint data model, approval matrix and role-based access" },
      { week: "Phase 3", title: "Development", description: "Built Power Apps, Power Automate flows, notifications and connector/REST integrations" },
      { week: "Phase 4", title: "Integration", description: "Delivered Power BI dashboards and embedded operational KPI reporting" },
      { week: "Phase 5", title: "Deployment", description: "UAT, rollout and Hyper-Care support for production users" }
    ]
  },
  {
    id: "gw-order-management-platform",
    title: "Order Management Platform",
    client: "G&W Electric (USA, Canada)",
    problem: "Order tracking, approvals and process visibility were fragmented, limiting production efficiency and external submission capability.",
    solution: "Developed a Power Apps, Power Automate and SharePoint solution for order tracking, approval management and process automation. Built a Power Pages portal for external submission with role-based workflows and Power BI KPI reporting.",
    role: "Power Platform Developer",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Power Pages", "Power BI"],
    impact: [
      "Increased production efficiency by 38%"
    ],
    timeline: [
      { week: "Phase 1", title: "Requirements", description: "Captured order management, approval and external portal requirements with USA/Canada stakeholders" },
      { week: "Phase 2", title: "Design", description: "Designed app architecture, Power Pages portal experience and role-based workflow model" },
      { week: "Phase 3", title: "Development", description: "Built Power Apps, Power Automate automations and SharePoint data foundations" },
      { week: "Phase 4", title: "Integration", description: "Delivered Power Pages external submission and Power BI KPI reporting" },
      { week: "Phase 5", title: "UAT & Rollout", description: "Testing, deployment and production enablement" }
    ]
  },
  {
    id: "ennvee-employee-management",
    title: "Employee Management System",
    client: "Ennvee Technogrup (USA)",
    problem: "Employee onboarding, KPI tracking, leave and timesheet processes lacked a unified system and clear performance visibility.",
    solution: "Developed a Dataverse-based Power App for onboarding, KPI tracking, leave and timesheet management with role-based access. Automated employee lifecycle processes with Power Automate and built Power BI dashboards using DAX, Power Query and data modelling.",
    role: "Power Platform Developer",
    duration: "Enterprise delivery",
    techStack: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "DAX", "Power Query"],
    impact: [
      "Streamlined employee lifecycle management",
      "Improved performance visibility through Power BI dashboards"
    ],
    timeline: [
      { week: "Phase 1", title: "Requirements", description: "Workshops covering onboarding, KPI, leave and timesheet processes" },
      { week: "Phase 2", title: "Design", description: "Designed Dataverse schema, role-based access and KPI tracking model" },
      { week: "Phase 3", title: "Development", description: "Built Power Apps UI and Power Automate lifecycle automations" },
      { week: "Phase 4", title: "Integration", description: "Developed Power BI dashboards with DAX, Power Query and data modelling" },
      { week: "Phase 5", title: "Deployment", description: "UAT, go-live and user enablement" }
    ]
  },
  {
    id: "bunzl-invoice-processing",
    title: "Invoice Processing Automation",
    client: "Bunzl (UK)",
    problem: "Manual invoice processing, approvals and payment workflows created delays and exception handling overhead with JD Edwards ERP.",
    solution: "Integrated Power Automate with JD Edwards ERP to automate invoice processing, approvals, reminders and payment workflows. Developed Power Apps for tracking and Power BI reporting with enterprise API/data integration and exception handling.",
    role: "Power Platform Developer",
    duration: "Enterprise delivery",
    techStack: ["Power Automate", "Power Apps", "Power BI", "JD Edwards", "REST APIs"],
    impact: [
      "Reduced invoice processing time by 65%"
    ],
    timeline: [
      { week: "Phase 1", title: "Analysis", description: "Analysed invoice, approval and payment workflows against JD Edwards processes" },
      { week: "Phase 2", title: "Design", description: "Designed automation, exception handling and API integration approach" },
      { week: "Phase 3", title: "Development", description: "Built Power Automate flows, Power Apps tracking and ERP integrations" },
      { week: "Phase 4", title: "Integration", description: "Delivered Power BI reporting and end-to-end exception handling" },
      { week: "Phase 5", title: "UAT & Release", description: "UAT, production release and Hyper-Care support" }
    ]
  },
  {
    id: "kehe-rpa-order-automation",
    title: "RPA Order Automation",
    client: "KeHE Distributors (USA)",
    problem: "Legacy order processing, inventory, approvals and batch allocation relied on manual effort across Excel, MS Access and SharePoint.",
    solution: "Developed Power Automate Desktop RPA for legacy order processing, inventory, approvals and batch allocation. Integrated Excel, MS Access and SharePoint with automated data-processing workflows, scheduling and exception handling.",
    role: "Power Platform Developer",
    duration: "Enterprise delivery",
    techStack: ["Power Automate Desktop", "RPA", "Excel", "MS Access", "SharePoint"],
    impact: [
      "Improved operational efficiency by 53%"
    ],
    timeline: [
      { week: "Phase 1", title: "Scope Definition", description: "Identified RPA scope across order, inventory, approval and batch allocation processes" },
      { week: "Phase 2", title: "Architecture Design", description: "Designed desktop flow architecture, scheduling and exception handling" },
      { week: "Phase 3", title: "Development", description: "Built Power Automate Desktop bots integrating Excel, Access and SharePoint" },
      { week: "Phase 4", title: "Testing", description: "Validated high-volume runs, failure handling and retry scenarios" },
      { week: "Phase 5", title: "Deployment", description: "Production deployment, monitoring and operational handover" }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
