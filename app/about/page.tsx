import Image from "next/image";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Link from "next/link";
import { FileText, Phone, Mail, Linkedin, MapPin } from "lucide-react";

export default function AboutPage() {
  const timelineItems = [
    {
      type: 'experience' as const,
      title: 'Power Platform Developer',
      organization: 'Salem Infotech Pvt. Ltd.',
      location: 'Chennai, India',
      period: 'July 2022 – Present',
      description: 'Developing enterprise Power Apps, Power Automate, Power Pages, SharePoint, SPFx, and Power BI solutions with Azure integrations, ALM, and production support for global clients.'
    },
    {
      type: 'experience' as const,
      title: 'Business Automation Consultant (Power Platform)',
      organization: 'GMS Pvt. Ltd.',
      location: 'Chennai, India',
      period: 'April 2020 – March 2022',
      description: 'Built Power Apps and Power Automate solutions for order management, invoicing, and inventory; delivered RPA workflows and enterprise integrations with requirements, UAT, and production support.'
    },
    {
      type: 'education' as const,
      title: 'MSc Aerospace Technologies',
      organization: 'University of Nottingham',
      location: 'UK',
      period: '2018 – 2019'
    },
    {
      type: 'education' as const,
      title: 'BE Electrical & Electronics Engineering',
      organization: 'Anna University',
      location: 'India',
      period: '2013 – 2017'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Applied Skills: Create and Manage Automated Processes by Using Power Automate',
      file: null as string | null,
      issued: null as string | null
    },
    {
      name: 'Salesforce Administrator',
      file: '/images/SFAdmin.pdf',
      issued: 'May 24, 2023'
    },
    {
      name: 'Salesforce Associate',
      file: null as string | null,
      issued: null as string | null
    },
    {
      name: 'Professional Scrum Master I',
      file: '/images/PSM1.pdf',
      issued: 'April 7, 2025'
    }
  ];

  const skillGroups = [
    {
      title: 'Power Platform',
      skills: 'Power Apps (Canvas, Model-driven), Power Automate Cloud/Desktop, Power Pages, Dataverse, Power Fx, AI Builder, Copilot, Copilot Studio, ALM, DLP, Governance'
    },
    {
      title: 'SharePoint / M365',
      skills: 'SharePoint Online, Architecture, Migration, ShareGate, Microsoft Migration Manager, SPFx, React.js, TypeScript, Fluent UI, Teams, OneDrive, Purview, Entra ID'
    },
    {
      title: 'Power BI',
      skills: 'Desktop/Service, Advanced DAX, Power Query, Data Modelling, Analysis Services, Tabular & Multidimensional Models, KPI Scorecards, Embedded Analytics, Power BI API'
    },
    {
      title: 'Integration / Azure',
      skills: 'Microsoft Graph API, REST/JSON, SQL, Azure SQL Database, Azure Functions, Azure Logic Apps, Dynamics 365, SAP, third-party systems, standard/premium connectors'
    },
    {
      title: 'Delivery',
      skills: 'Requirements, Solution Design, UAT, ALM, Azure DevOps, CI/CD, Deployment, Hyper-Care, Production Support, Troubleshooting, Agile/Scrum'
    }
  ];

  const achievements = [
    'Delivered 15+ enterprise Power Platform and Microsoft 365 solutions for global clients across the USA, UK, Canada and Japan.',
    'Designed Power Apps, Power Automate, SharePoint and Dataverse solutions supporting 200+ users and monitored 11+ production workflows/applications.',
    'Delivered Power BI reporting and analytics solutions reducing reporting cycles by up to 90%, including embedded reporting within business applications.',
    'Implemented Power Platform ALM, governance, DLP, role-based security and Dev/Test/Prod environment management using Azure DevOps.',
    'Delivered automation and RPA solutions reducing manual processing effort by up to 70%, including ERP and legacy-system integrations.'
  ];

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6">
            About
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            Chennai, India
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden bg-primary/5 border-2 border-primary/20">
              <Image
                src="/images/profileimg.jpeg"
                alt="Shashank Sundar - Power Platform Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                Professional Summary
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  I am a <strong className="text-foreground font-semibold">Power Platform and Microsoft 365</strong> technology professional with <strong className="text-foreground font-semibold">5+ years</strong> of hands-on experience delivering enterprise business applications, SharePoint solutions, workflow automation and analytics for clients across the <strong className="text-foreground font-semibold">USA, UK, Canada and Japan</strong>.
                </p>

                <p>
                  Hands-on across <strong className="text-foreground font-semibold">Power Apps, Power Automate, Power Pages, Dataverse, SharePoint Online, SPFx, React.js, TypeScript, Fluent UI and Power BI</strong>, with enterprise integration using Microsoft Graph API, Azure Functions, Azure Logic Apps, REST APIs, Dynamics 365, SAP, SQL and third-party systems.
                </p>

                <p>
                  Experienced in SharePoint architecture, migration, governance and security, advanced Power BI modelling, embedded analytics, ALM, UAT, deployment and production support. MSc Aerospace Technologies, University of Nottingham (UK).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="border-t border-primary/20 pt-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">
            Key Achievements
          </h2>
          <ul className="space-y-4 max-w-4xl">
            {achievements.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold flex-shrink-0">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Skills */}
        <div className="border-t border-primary/20 pt-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="border border-primary/20 p-6 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 tracking-tight">
                  {group.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {group.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <div className="border-t border-primary/20 pt-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">
            Education & Experience
          </h2>
          <ExperienceTimeline items={timelineItems} />
        </div>

        {/* Certifications */}
        <div className="border-t border-primary/20 pt-20 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">
            Certifications & Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const content = (
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      {cert.issued && (
                        <p className="text-sm text-muted-foreground uppercase tracking-wide">
                          Issued: {cert.issued}
                        </p>
                      )}
                    </div>
                  </div>
                  {cert.file && (
                    <p className="text-sm text-primary group-hover:text-primary/80 transition-colors">
                      View Certificate →
                    </p>
                  )}
                </>
              );

              const className = "group border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6 bg-white block";

              return cert.file ? (
                <Link
                  key={index}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </Link>
              ) : (
                <div key={index} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-primary/20 pt-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">
            Contact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:+918838731384"
              className="group border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6 bg-white flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Phone</h3>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  +91 883-873-1384
                </p>
              </div>
            </a>

            <a
              href="mailto:sundarshashank@gmail.com"
              className="group border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6 bg-white flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Email</h3>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors break-all">
                  sundarshashank@gmail.com
                </p>
              </div>
            </a>

            <Link
              href="https://www.linkedin.com/in/shashank2301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6 bg-white flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">LinkedIn</h3>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  linkedin.com/in/shashank2301
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
