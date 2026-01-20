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
    id: "order-approval-automation",
    title: "Enterprise Order Approval Automation",
    client: "Manufacturing (Japan)",
    problem: "Manual order approvals caused delays and SLA breaches for high-volume industrial orders, impacting customer satisfaction and operational efficiency.",
    solution: "Designed automated approval and reminder workflows using Power Automate and SharePoint, with intelligent routing and escalation logic.",
    role: "Senior Power Platform Consultant",
    duration: "6 weeks",
    techStack: ["Power Automate", "SharePoint", "Outlook", "Power BI"],
    impact: [
      "1,000+ approvals/month automated",
      "~60% reduction in approval time",
      "SLA compliance improved to 95%+"
    ],
    timeline: [
      { week: "Week 1", title: "Analysis", description: "Analysed manual approval process and SLA issues" },
      { week: "Week 2", title: "Design", description: "Designed approval matrix and escalation logic" },
      { week: "Weeks 3–4", title: "Development", description: "Built Power Automate approval and reminder flows" },
      { week: "Week 5", title: "Testing", description: "Tested workflows with multiple approval paths" },
      { week: "Week 6", title: "Deployment", description: "Deployed and trained users" }
    ]
  },
  {
    id: "employee-kpi-performance",
    title: "Employee KPI & Performance Platform",
    client: "IT Services (USA)",
    problem: "Manual KPI tracking and performance reporting consuming significant HR time, with inconsistent data and delayed insights affecting employee development.",
    solution: "Built a comprehensive Power Apps solution with Dataverse backend, featuring automated KPI calculations, performance dashboards, and self-service reporting.",
    role: "Power Apps Developer & Technical BA",
    duration: "8 weeks",
    techStack: ["Power Apps", "Dataverse", "Power BI", "Power Automate"],
    impact: [
      "300+ employee records managed",
      "~50% reduction in reporting effort"
    ],
    timeline: [
      { week: "Week 1", title: "Requirements", description: "Requirement workshops with HR/Admin teams" },
      { week: "Week 2", title: "Design", description: "Designed KPI scoring model and data schema" },
      { week: "Weeks 3–5", title: "Development", description: "Built Power Apps UI and Dataverse logic" },
      { week: "Week 6", title: "Integration", description: "Integrated Power BI dashboards" },
      { week: "Weeks 7–8", title: "UAT & Rollout", description: "UAT and production rollout" }
    ]
  },
  {
    id: "unattended-rpa-legacy",
    title: "Unattended RPA for Legacy Systems",
    client: "Distribution (USA)",
    problem: "Legacy systems requiring manual data entry and processing, leading to high error rates, operational delays, and increased labor costs.",
    solution: "Developed unattended RPA solutions to automate data extraction, transformation, and entry across legacy systems with error handling and monitoring.",
    role: "RPA Developer",
    duration: "10 weeks",
    techStack: ["Power Automate Desktop", "RPA", "Legacy System Integration", "Power BI"],
    impact: [
      "5,000+ transactions/month automated",
      "~65% manual effort reduction",
      "Errors reduced by 50%"
    ],
    timeline: [
      { week: "Week 1", title: "Scope Definition", description: "Identified automation scope and exception scenarios" },
      { week: "Week 2", title: "Architecture Design", description: "Designed bot architecture and retry logic" },
      { week: "Weeks 3–6", title: "Development", description: "Developed unattended desktop flows" },
      { week: "Weeks 7–8", title: "Testing", description: "Stress-tested for volume and failure handling" },
      { week: "Weeks 9–10", title: "Deployment", description: "Production deployment and monitoring" }
    ]
  },
  {
    id: "ai-invoice-processing",
    title: "AI Invoice Processing",
    client: "Multinational Organisation (UK)",
    problem: "High-volume manual invoice processing causing delays, errors, and increased operational costs across multiple business units.",
    solution: "Implemented AI-powered invoice processing solution using Microsoft Copilot and Power Automate, with automated data extraction, validation, and approval workflows.",
    role: "Power Platform Consultant",
    duration: "7 weeks",
    techStack: ["Power Automate", "Copilot", "Power BI", "JD Edwards"],
    impact: [
      "2,000+ invoices/month processed",
      "~55% processing time reduction"
    ],
    timeline: [
      { week: "Week 1", title: "Analysis", description: "Invoice analysis and data extraction requirements" },
      { week: "Week 2", title: "Design", description: "Designed AI extraction and validation logic" },
      { week: "Weeks 3–4", title: "Development", description: "Built Copilot-based document processing flows" },
      { week: "Week 5", title: "Integration", description: "Power BI reporting integration" },
      { week: "Weeks 6–7", title: "UAT & Release", description: "UAT and production release" }
    ]
  },
  {
    id: "order-management-platform",
    title: "Order Management Power Apps",
    client: "Manufacturing (USA)",
    problem: "Fragmented order management processes across multiple systems causing delays, inventory discrepancies, and poor customer experience.",
    solution: "Developed a unified order management solution using Power Apps and Dataverse, integrating with existing systems for end-to-end order lifecycle management.",
    role: "Power Apps Consultant",
    duration: "9 weeks",
    techStack: ["Power Apps", "Power Automate", "SharePoint"],
    impact: [
      "10,000+ orders tracked",
      "~70% Excel dependency eliminated",
      "Improved order tracking and visibility"
    ],
    timeline: [
      { week: "Week 1", title: "Analysis", description: "Business flow analysis and data modelling" },
      { week: "Week 2", title: "UX Design", description: "UX design and app navigation planning" },
      { week: "Weeks 3–6", title: "Development", description: "Power Apps development and automation" },
      { week: "Week 7", title: "Data Migration", description: "Historical data migration" },
      { week: "Weeks 8–9", title: "Testing & Deployment", description: "Testing and deployment" }
    ]
  },
  {
    id: "healthcare-web-mobile",
    title: "Healthcare Web & Mobile App",
    client: "Healthcare Services",
    problem: "Lack of digital patient engagement tools and fragmented communication channels affecting patient experience and operational efficiency.",
    solution: "Designed and developed a comprehensive web and mobile platform using ReactJS and React Native, with integrated AI chatbot for automated patient interactions.",
    role: "Senior BA & Front-End Lead",
    duration: "Ongoing",
    techStack: ["ReactJS", "React Native", "TypeScript", "AI Chatbot"],
    impact: [
      "Unified web & mobile experience",
      "Automated user interactions via chatbot",
      "20+ screens designed and developed"
    ],
    timeline: [
      { week: "Phase 1", title: "Analysis", description: "Requirement analysis and healthcare workflows" },
      { week: "Phase 2", title: "Design", description: "UX/UI design for web and mobile" },
      { week: "Phase 3", title: "Development", description: "Front-end development (20+ screens)" },
      { week: "Phase 4", title: "AI Integration", description: "AI chatbot development" },
      { week: "Phase 5", title: "Optimization", description: "Model training and optimisation" }
    ]
  },
  {
    id: "custom-ai-chatbot",
    title: "Custom AI Chatbot",
    client: "Multiple Clients",
    problem: "High volume of repetitive customer inquiries requiring manual response, leading to increased support costs and slower response times.",
    solution: "Built custom AI-powered chatbots using Microsoft Copilot and Azure services, integrated with business systems for context-aware, automated customer interactions.",
    role: "Automation Architect & AI Developer",
    duration: "Ongoing",
    techStack: ["Microsoft Copilot", "Azure AI Services", "Power Automate", "API Integration", "Natural Language Processing"],
    impact: [
      "Automated customer interactions and support",
      "Reduced response time to seconds",
      "Improved customer satisfaction scores"
    ],
    timeline: [
      { week: "Phase 1", title: "Analysis", description: "Requirement analysis and chatbot use case identification" },
      { week: "Phase 2", title: "Design", description: "Conversation flow design and integration architecture" },
      { week: "Phase 3", title: "Development", description: "AI model integration and custom training" },
      { week: "Phase 4", title: "Integration", description: "Business system integration and API connections" },
      { week: "Phase 5", title: "Optimization", description: "Model training and continuous improvement" }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

