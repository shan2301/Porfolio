import Image from "next/image";
import { ExperienceTimeline } from "@/components/experience-timeline";
import Link from "next/link";
import { FileText, Phone, Mail, Linkedin } from "lucide-react";

export default function AboutPage() {
  const timelineItems = [
    {
      type: 'experience' as const,
      title: 'Business Analyst',
      organization: 'Salem Infotech Private Limited',
      location: 'India',
      period: '2022 - Present'
    },
    {
      type: 'experience' as const,
      title: 'UX/UI Designer',
      organization: 'GMS Private Limited',
      location: 'India',
      period: '2020 - 2022'
    },
    {
      type: 'education' as const,
      title: 'MSc in Aerospace Technologies',
      organization: 'University of Nottingham',
      location: 'UK',
      period: '2018 - 2019',
      description: 'Specialization in user interface and navigation and positioning technologies'
    },
    {
      type: 'education' as const,
      title: 'Bachelors in Electrical & Electronics Engineering',
      organization: 'Anna University',
      location: 'India',
      period: '2013 - 2017'
    }
  ];

  const certifications = [
    {
      name: 'Salesforce Administrator',
      file: '/images/SFAdmin.pdf',
      issued: 'May 24, 2023'
    },
    {
      name: 'Professional Scrum Master I (PSM I)',
      file: '/images/PSM1.pdf',
      issued: 'April 7, 2025'
    },
    {
      name: 'Programming using C & C++',
      file: '/images/C&C++.pdf',
      issued: 'November 25, 2013'
    }
  ];
  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6">
            About
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden bg-primary/5 border-2 border-primary/20">
              <Image
                src="/images/profileimg.jpeg"
                alt="Shashank - Senior Power Platform Consultant"
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
                  I am a <strong className="text-foreground font-semibold">Senior Power Platform Consultant</strong> and <strong className="text-foreground font-semibold">Technical Business Analyst</strong> with 4+ years of SaaS delivery experience, specialising in enterprise automation, analytics, and digital application development.
                </p>

                <p>
                  With an <strong className="text-foreground font-semibold">MSc in Aerospace Technologies</strong> from the University of Nottingham (UK), systems engineering principles, analytical modelling, and structured problem-solving are applied to design scalable business solutions.
                </p>

                <p>
                  Power Platform, RPA, AI-enabled, and web/mobile solutions have been delivered for global organisations across the <strong className="text-foreground font-semibold">UK, US, Japan, and India</strong>, working in highly client-facing roles from requirement discovery to production delivery.
                </p>
              </div>
            </div>
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
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Link
                key={index}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6 bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                      Issued: {cert.issued}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary group-hover:text-primary/80 transition-colors">
                  View Certificate →
                </p>
              </Link>
            ))}
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
                  Connect with me →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

