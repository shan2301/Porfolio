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
} from "lucide-react";
import { CVDownloadButton } from "@/components/cv-download-button";
import { DeliveryProgress } from "./delivery-progress";
import { AvionicsBackdrop } from "./avionics-backdrop";
import { SkillOrbit } from "./skill-orbit";
import { ScrollReveal } from "./scroll-reveal";
import {
  achievements,
  skillGroups,
  timelineItems,
  certifications,
  projects,
  profile,
  cvDownloads,
} from "@/lib/portfolio-data";

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-5">
        <span className="runway-marker">{index}</span>
        <span className="section-label">{eyebrow}</span>
      </div>
      <h2 className="font-headline text-4xl sm:text-5xl md:text-[3.5rem] font-medium leading-[1.05] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

export function PortfolioPage() {
  return (
    <>
      <AvionicsBackdrop />
      <DeliveryProgress />

      <main className="relative z-10 pt-[4.25rem]">
        {/* Hero */}
        <section
          id="hangar"
          className="relative min-h-[100dvh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 hangar-doors" aria-hidden />

          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center py-20 lg:py-28">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="section-label mb-6">Technical Delivery</p>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h1 className="font-headline text-[clamp(3rem,7vw,5.5rem)] font-medium leading-[0.95] mb-6 text-balance">
                  Shashank
                  <span className="block text-runway">Sundar</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <p className="text-xl sm:text-2xl font-headline text-foreground/90 mb-2">
                  {profile.title}
                </p>
                <p className="text-sm sm:text-base uppercase tracking-[0.14em] text-muted-foreground mb-8">
                  {profile.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-10 text-[15px] sm:text-base">
                  {profile.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={320}>
                <div className="flex flex-wrap gap-3">
                  <a href="#mission" className="btn-runway">
                    View Selected Work
                  </a>
                  <a href="#takeoff" className="btn-hangar-outline">
                    Profile
                  </a>
                  <CVDownloadButton />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="scale" delay={180} className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:ml-auto">
                <div className="absolute -inset-px bg-gradient-to-b from-runway/25 via-border to-border" />
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src="/images/profileimg.jpeg"
                    alt="Shashank Sundar"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-runway" />
                    Chennai
                  </span>
                  <span>MSc Nottingham</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Profile */}
        <section id="takeoff" className="section-runway py-24 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <SectionHeading
              index="01"
              eyebrow="Professional Profile"
              title="Clarity, delivery, and outcomes."
              description="Business analysis, Agile leadership and Microsoft technology expertise — guiding multidisciplinary teams from discovery through deployment for clients across the USA, UK, Canada and Japan."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {achievements.map((item, i) => (
                <ScrollReveal key={i} delay={i * 70} direction="up">
                  <div className="hangar-panel p-6 h-full group">
                    <span className="font-headline text-2xl text-runway">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed group-hover:text-foreground transition-colors">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <h3 className="font-headline text-3xl font-medium mb-8">
                Experience & Education
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {timelineItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80} direction="left">
                  <div className="hangar-panel p-6 sm:p-8 flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-secondary border border-border flex items-center justify-center">
                      {item.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-runway" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-runway" />
                      )}
                    </div>
                    <div>
                      <span className="section-label">{item.period}</span>
                      <h4 className="font-headline text-xl sm:text-2xl font-medium mt-2">
                        {item.title}
                      </h4>
                      <p className="text-runway mt-1 text-sm font-medium tracking-wide">
                        {item.organization} · {item.location}
                      </p>
                      {"description" in item && item.description && (
                        <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-3xl">
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

        {/* Expertise */}
        <section id="cruise" className="section-sky py-24 sm:py-32 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <SectionHeading
              index="02"
              eyebrow="Capabilities"
              title="Expertise that travels well."
              description="Delivery leadership, analysis discipline and digital platforms — organised for enterprise outcomes."
            />

            <SkillOrbit />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 80} direction="scale">
                  <div className="hangar-panel p-6 h-full hover:-translate-y-0.5 transition-transform">
                    <h3 className="font-headline text-xl font-medium mb-3">
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

        {/* Work */}
        <section id="mission" className="section-mission py-24 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <SectionHeading
              index="03"
              eyebrow="Selected Work"
              title="Enterprise engagements."
            />

            <div className="divide-y divide-border border-y border-border">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 60} direction="right">
                  <article className="py-8 sm:py-10 group grid lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="lg:col-span-1 font-headline text-2xl text-runway/50 group-hover:text-runway transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="font-headline text-2xl sm:text-3xl font-medium">
                        {project.title}
                      </h3>
                      <p className="text-sm text-runway mt-2 tracking-wide">
                        {project.client}
                      </p>
                      <p className="text-muted-foreground mt-4 leading-relaxed text-sm sm:text-base">
                        {project.solution}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="skill-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <div className="hangar-panel p-5 h-full">
                        <span className="section-label">Outcome</span>
                        <p className="text-sm font-medium text-foreground mt-3 leading-relaxed">
                          {project.impact[0]}
                        </p>
                        <p className="text-xs text-muted-foreground mt-4 uppercase tracking-[0.14em]">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="landing" className="section-approach py-24 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <SectionHeading
              index="04"
              eyebrow="Credentials & Contact"
              title="Let’s discuss the next brief."
            />

            <ScrollReveal>
              <h3 className="font-headline text-2xl font-medium mb-6">
                Certifications
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {certifications.map((cert, i) => {
                const inner = (
                  <>
                    <FileText className="w-5 h-5 text-runway flex-shrink-0 mt-0.5" />
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
                  "hangar-panel p-5 flex gap-4 group hover:border-runway/40 transition-all";

                return cert.file ? (
                  <ScrollReveal key={cert.name} delay={i * 50}>
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
                  <ScrollReveal key={cert.name} delay={i * 50}>
                    <div className={cls}>{inner}</div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal>
              <h3 className="font-headline text-2xl font-medium mb-6">
                Curriculum Vitae
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
              {cvDownloads.map((cv, i) => (
                <ScrollReveal key={cv.file} delay={i * 40}>
                  <a
                    href={encodeURI(cv.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hangar-panel p-4 flex items-center gap-3 group hover:border-runway/40 transition-all"
                  >
                    <FileText className="w-4 h-4 text-runway flex-shrink-0" />
                    <span className="text-sm font-medium group-hover:text-runway transition-colors">
                      {cv.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-runway ml-auto opacity-50" />
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <h3 className="font-headline text-2xl font-medium mb-6">
                Contact
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-4">
              <ScrollReveal delay={0}>
                <a href="tel:+918838731384" className="contact-card group">
                  <Phone className="w-5 h-5 text-runway" />
                  <div>
                    <span className="section-label">Phone</span>
                    <p className="font-medium mt-2 group-hover:text-runway transition-colors">
                      +91 883-873-1384
                    </p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <a
                  href="mailto:sundarshashank@gmail.com"
                  className="contact-card group"
                >
                  <Mail className="w-5 h-5 text-runway" />
                  <div>
                    <span className="section-label">Email</span>
                    <p className="font-medium mt-2 group-hover:text-runway transition-colors break-all">
                      sundarshashank@gmail.com
                    </p>
                  </div>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <Link
                  href="https://www.linkedin.com/in/shashank2301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card group"
                >
                  <Linkedin className="w-5 h-5 text-runway" />
                  <div>
                    <span className="section-label">LinkedIn</span>
                    <p className="font-medium mt-2 group-hover:text-runway transition-colors">
                      shashank2301
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={220}>
              <div className="mt-20 pt-8 border-t border-border text-center">
                <p className="section-label mb-2">Based in Chennai</p>
                <p className="text-muted-foreground text-sm">
                  Available for international delivery roles
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
