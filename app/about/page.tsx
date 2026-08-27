import Image from "next/image";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Link from "next/link";
import { FileText, Phone, Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

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
      file: '/images/Credentials - shashanks-8473 _ Microsoft Learn.pdf',
      issued: null as string | null
    },
    {
      name: 'Salesforce Administrator',
      file: '/images/SFAdmin.pdf',
      issued: 'May 24, 2023'
    },
    {
      name: 'Salesforce Associate',
      file: '/images/SF_Associate.pdf',
      issued: null as string | null
    },
    {
      name: 'Professional Scrum Master I',
      file: '/images/PSM1.pdf',
      issued: 'April 7, 2025'
    },
    {
      name: 'Programming using C & C++',
      file: '/images/C&C++.pdf',
      issued: 'November 25, 2013'
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
    <main className="min-h-screen pt-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="mb-16 md:mb-24 animate-reveal-up">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Profile
          </p>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-4">
            About
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            Chennai, India
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
          <div className="lg:col-span-5 relative animate-image-settle">
            <div className="aspect-[4/5] relative overflow-hidden rounded-md bg-secondary">
              <Image
                src="/images/profileimg.jpeg"
                alt="Shashank Sundar - Power Platform Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 animate-reveal-up delay-200">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight">
              Professional Summary
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
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

        <section className="section-rule pt-16 md:pt-24 mb-20 md:mb-28">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-14">
            Key Achievements
          </h2>
          <ul className="space-y-0 max-w-4xl">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex gap-5 md:gap-8 py-6 border-b border-border/80 text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                <span className="font-headline text-primary font-semibold flex-shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-rule pt-16 md:pt-24 mb-20 md:mb-28">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-14">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 rounded-md overflow-hidden border border-border/60">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--background))] p-6 md:p-8 hover:bg-white/80 transition-colors"
              >
                <h3 className="font-headline text-lg md:text-xl font-semibold text-primary mb-3">
                  {group.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {group.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-rule pt-16 md:pt-24 mb-20 md:mb-28">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-14">
            Education & Experience
          </h2>
          <ExperienceTimeline items={timelineItems} />
        </section>

        <section className="section-rule pt-16 md:pt-24 mb-20 md:mb-28">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-14">
            Certifications & Credentials
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const inner = (
                <>
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {cert.name}
                    </h3>
                    {cert.issued && (
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        Issued {cert.issued}
                      </p>
                    )}
                    {cert.file && (
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        View certificate
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </>
              );

              const className =
                "group flex gap-4 surface-panel rounded-md p-5 hover:border-primary/35 hover:bg-white transition-all";

              return cert.file ? (
                <Link
                  key={index}
                  href={encodeURI(cert.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </Link>
              ) : (
                <div key={index} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-rule pt-16 md:pt-24">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-14">
            Contact
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:+918838731384"
              className="group surface-panel rounded-md p-6 flex items-start gap-4 hover:border-primary/35 hover:bg-white transition-all"
            >
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Phone</h3>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  +91 883-873-1384
                </p>
              </div>
            </a>
            <a
              href="mailto:sundarshashank@gmail.com"
              className="group surface-panel rounded-md p-6 flex items-start gap-4 hover:border-primary/35 hover:bg-white transition-all"
            >
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Email</h3>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                  sundarshashank@gmail.com
                </p>
              </div>
            </a>
            <Link
              href="https://www.linkedin.com/in/shashank2301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group surface-panel rounded-md p-6 flex items-start gap-4 hover:border-primary/35 hover:bg-white transition-all"
            >
              <Linkedin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">LinkedIn</h3>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  linkedin.com/in/shashank2301
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
