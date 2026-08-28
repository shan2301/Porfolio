"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  ArrowUpRight,
  FileText,
  GraduationCap,
  Briefcase,
  Plane,
} from "lucide-react";
import { CVDownloadButton } from "@/components/cv-download-button";
import { FlightJourney } from "./flight-journey";
import { SkillOrbit } from "./skill-orbit";
import { ScrollReveal } from "./scroll-reveal";
import {
  achievements,
  skillGroups,
  timelineItems,
  certifications,
  projects,
} from "@/lib/portfolio-data";

export function PortfolioPage() {
  return (
    <>
      <FlightJourney />

      <main className="relative z-10 pt-16">
        {/* ═══ HANGAR — Hero ═══ */}
        <section
          id="hangar"
          className="relative min-h-[100dvh] flex items-center overflow-hidden section-hangar"
        >
          <div className="absolute inset-0 hangar-doors" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hangar-floor to-transparent" aria-hidden />

          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 hangar-badge mb-6">
                  <Plane className="w-4 h-4 text-runway" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-runway">
                    B-2 Spirit · Hangar Bay · Clear for Departure
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-headline text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] mb-4">
                  Shashank
                  <span className="block text-runway">Sundar</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl sm:text-2xl text-steel-light font-medium mb-2">
                  Power Platform Developer
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  SharePoint · Power BI · Microsoft 365
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
                  MSc Aerospace Technologies (Nottingham, UK). 5+ years
                  delivering enterprise solutions for clients across the USA, UK,
                  Canada, and Japan.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-3">
                  <a href="#takeoff" className="btn-runway">
                    Begin Journey ↓
                  </a>
                  <a href="#mission" className="btn-hangar-outline">
                    View Missions
                  </a>
                  <CVDownloadButton />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="scale" delay={200}>
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                <div className="absolute -inset-3 border-2 border-runway/30 rounded-sm animate-border-pulse" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm hangar-panel">
                  <Image
                    src="/images/profileimg.jpeg"
                    alt="Shashank Sundar"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hangar via-transparent to-runway/5" />
                </div>
                <div className="absolute -bottom-4 -left-4 hangar-panel px-4 py-2 font-mono text-xs text-runway">
                  PILOT ID: SS-2301
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══ TAKEOFF — About ═══ */}
        <section id="takeoff" className="section-runway py-24 sm:py-32">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="runway-marker">01</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-runway">
                  Runway · Take-Off
                </span>
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Mission Brief
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
                Power Platform and Microsoft 365 professional with hands-on
                experience across Power Apps, Power Automate, SharePoint, SPFx,
                React.js, TypeScript, and Power BI — integrating Microsoft Graph,
                Azure, Dynamics 365, SAP, and enterprise systems.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {achievements.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80} direction="up">
                  <div className="hangar-panel p-5 h-full hover:border-runway/50 transition-colors group">
                    <span className="font-mono text-runway text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed group-hover:text-foreground transition-colors">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <h3 className="font-headline text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-runway" />
                Flight Log — Experience
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {timelineItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 100} direction="left">
                  <div className="hangar-panel p-6 sm:p-8 flex gap-5 hover:border-runway/40 transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-runway/10 flex items-center justify-center">
                      {item.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-runway" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-runway" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-runway uppercase tracking-wider">
                        {item.period}
                      </span>
                      <h4 className="font-headline text-xl font-semibold mt-1">
                        {item.title}
                      </h4>
                      <p className="text-runway/80 font-medium">
                        {item.organization} · {item.location}
                      </p>
                      {"description" in item && item.description && (
                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CRUISE — Skills ═══ */}
        <section id="cruise" className="section-sky py-24 sm:py-32 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="runway-marker">02</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-glow">
                  Cruise Altitude · In Journey
                </span>
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Navigation Systems
              </h2>
              <p className="text-muted-foreground max-w-2xl mb-12">
                Skills and tools powering every mission — orbiting the cockpit
                of enterprise delivery.
              </p>
            </ScrollReveal>

            <SkillOrbit />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 100} direction="scale">
                  <div className="hangar-panel p-5 hover:border-sky-glow/40 transition-all hover:-translate-y-1">
                    <h3 className="font-headline text-lg font-semibold text-sky-glow mb-2">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {group.skills}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ MISSION — Projects ═══ */}
        <section id="mission" className="section-mission py-24 sm:py-32">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="runway-marker">03</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-runway">
                  Active Missions
                </span>
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
                Flight Manifest
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 80} direction="right">
                  <article className="hangar-panel p-6 sm:p-8 group hover:border-runway/50 transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="font-mono text-runway text-3xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline text-2xl sm:text-3xl font-semibold group-hover:text-runway transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-runway/80 font-medium mt-1">
                          {project.client}
                        </p>
                        <p className="text-muted-foreground mt-4 leading-relaxed">
                          {project.solution}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="skill-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-48 flex-shrink-0">
                        <div className="bg-runway/10 border border-runway/30 rounded-sm p-4">
                          <span className="text-xs font-mono uppercase text-runway tracking-wider">
                            Outcome
                          </span>
                          <p className="text-sm font-semibold text-foreground mt-2">
                            {project.impact[0]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LANDING — Certs & Contact ═══ */}
        <section id="landing" className="section-approach py-24 sm:py-32">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="runway-marker">04</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-runway">
                  Final Approach · Landing
                </span>
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
                Clear to Land
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h3 className="font-headline text-2xl font-semibold mb-6 text-sky-glow">
                Certifications & Credentials
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-20">
              {certifications.map((cert, i) => {
                const inner = (
                  <>
                    <FileText className="w-5 h-5 text-runway flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-runway transition-colors">
                        {cert.name}
                      </h4>
                      {cert.issued && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Issued {cert.issued}
                        </p>
                      )}
                      {cert.file && (
                        <span className="inline-flex items-center gap-1 text-xs text-runway mt-2">
                          View certificate
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </>
                );

                const cls =
                  "hangar-panel p-5 flex gap-4 group hover:border-runway/50 transition-all";

                return cert.file ? (
                  <ScrollReveal key={cert.name} delay={i * 60}>
                    <Link
                      href={encodeURI(cert.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {inner}
                    </Link>
                  </ScrollReveal>
                ) : (
                  <ScrollReveal key={cert.name} delay={i * 60}>
                    <div className={cls}>{inner}</div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal>
              <h3 className="font-headline text-2xl font-semibold mb-6">
                Contact Tower
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-4">
              <ScrollReveal delay={0}>
                <a href="tel:+918838731384" className="contact-card group">
                  <Phone className="w-5 h-5 text-runway" />
                  <div>
                    <span className="text-xs font-mono uppercase text-runway tracking-wider">
                      Phone
                    </span>
                    <p className="font-medium group-hover:text-runway transition-colors">
                      +91 883-873-1384
                    </p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <a
                  href="mailto:sundarshashank@gmail.com"
                  className="contact-card group"
                >
                  <Mail className="w-5 h-5 text-runway" />
                  <div>
                    <span className="text-xs font-mono uppercase text-runway tracking-wider">
                      Email
                    </span>
                    <p className="font-medium group-hover:text-runway transition-colors break-all">
                      sundarshashank@gmail.com
                    </p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link
                  href="https://www.linkedin.com/in/shashank2301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card group"
                >
                  <Linkedin className="w-5 h-5 text-runway" />
                  <div>
                    <span className="text-xs font-mono uppercase text-runway tracking-wider">
                      LinkedIn
                    </span>
                    <p className="font-medium group-hover:text-runway transition-colors">
                      shashank2301
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="mt-20 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-runway/60 mb-2">
                  End of Route
                </p>
                <p className="text-muted-foreground text-sm">
                  Chennai, India · Available for global missions
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
