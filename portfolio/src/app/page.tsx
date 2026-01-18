import {
  ArrowUpRight,
  Code2,
  Database,
  Link2,
  Palette,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ExpandableCards } from "@/components/ui/expandable-cards";
import { NoiseBackground } from "@/components/ui/noise-background";

const services = [
  {
    title: "Backend architecture",
    description:
      "API-first systems, clean data modeling, and reliability patterns built to scale.",
    icon: Database,
    accent: "rgba(14, 116, 144, 0.45)",
    spotlight: "rgba(14, 116, 144, 0.25)",
    points: ["API design", "Data modeling", "Reliability patterns"],
  },
  {
    title: "Systems integration",
    description:
      "Payments, auth, and third-party services wired together with secure workflows.",
    icon: Link2,
    accent: "rgba(234, 179, 8, 0.45)",
    spotlight: "rgba(234, 179, 8, 0.22)",
    points: ["Secure workflows", "Event pipelines", "3rd-party APIs"],
  },
  {
    title: "Product engineering",
    description:
      "Shipping full stack features with a polished UX and resilient infrastructure.",
    icon: Code2,
    accent: "rgba(34, 197, 94, 0.45)",
    spotlight: "rgba(34, 197, 94, 0.22)",
    points: ["MVP to scale", "Performance tuning", "Observability"],
  },
  {
    title: "Frontend development",
    description:
      "Modern UI design and implementation using CSS, Tailwind, and Material UI.",
    icon: Palette,
    accent: "rgba(59, 130, 246, 0.45)",
    spotlight: "rgba(59, 130, 246, 0.22)",
    points: ["Design systems", "Component libraries", "Responsive UI"],
  },
];

const projects = [
  {
    title: "Investment Management System",
    description:
      "Portfolio tracking, compliance workflows, and reporting dashboards.",
    tags: ["Python", "Django", "Docker"],
    outcome: "Built secure data pipelines with audit-ready reporting.",
  },
  {
    title: "Rent Calculator Approval System",
    description:
      "Approval flows with role-based checks and automated calculations.",
    tags: ["Next.js", "FastAPI", "Docker"],
    outcome: "Reduced approval time with reliable backend services.",
  },
  {
    title: "Admin RBAC Dashboard System",
    description: "Admin tools with RBAC, audits, and clean UI workflows.",
    tags: ["Next.js", "Tailwind CSS", "Material UI"],
    outcome: "Delivered a fast, intuitive admin experience.",
  },
];

const process = [
  {
    step: "Discovery",
    detail:
      "Deep-dive on goals, constraints, and success metrics. I map risks early, clarify scope, and turn requirements into a focused delivery plan.",
  },
  {
    step: "Design",
    detail:
      "Define API contracts, data models, and system boundaries with clear ownership. I create architecture notes and flow diagrams to keep everyone aligned.",
  },
  {
    step: "Build",
    detail:
      "Ship in tight iterations with tests, docs, and reliable CI. I prioritize performance, observability, and maintainable code that scales.",
  },
  {
    step: "Launch",
    detail:
      "Production-ready releases with monitoring, alerts, and rollback plans. I stay through stabilization, then hand off with clean docs and training.",
  },
];

const stackItems = [
  {
    name: "Python",
    area: "Backend",
    icon: "simple-icons:python",
    color: "3776AB",
    logo: "/logos/python.svg",
  },
  {
    name: "Java",
    area: "Backend",
    icon: "simple-icons:openjdk",
    color: "007396",
    logo: "/logos/newjavalogo.png",
  },
  {
    name: "PHP",
    area: "Backend",
    icon: "simple-icons:php",
    color: "777BB4",
    logo: "/logos/php.svg",
  },
  {
    name: "Next.js",
    area: "Frontend",
    icon: "simple-icons:nextdotjs",
    color: "ffffff",
    logo: "/logos/nextjs.svg",
  },
  {
    name: "CSS3",
    area: "Frontend",
    icon: "simple-icons:css3",
    color: "1572B6",
    logo: "/logos/css.svg",
  },
  {
    name: "Tailwind CSS",
    area: "Frontend",
    icon: "simple-icons:tailwindcss",
    color: "06B6D4",
    logo: "/logos/tailwindcss.svg",
  },
  {
    name: "Material UI",
    area: "Frontend",
    icon: "simple-icons:mui",
    color: "007FFF",
    logo: "/logos/mui.svg",
  },
  {
    name: "Docker",
    area: "Infra",
    icon: "simple-icons:docker",
    color: "2496ED",
    logo: "/logos/docker.svg",
  },
  {
    name: "SQL",
    area: "Backend",
    icon: "simple-icons:mysql",
    color: "4479A1",
  },
  {
    name: "AWS",
    area: "Cloud",
    icon: "simple-icons:amazonaws",
    color: "FF9900",
  },
  {
    name: "FastAPI",
    area: "Backend",
    icon: "simple-icons:fastapi",
    color: "009688",
    logo: "/logos/fastapi.svg",
  },
  {
    name: "Django",
    area: "Backend",
    icon: "simple-icons:django",
    color: "44B78B",
    logo: "/logos/django.svg",
  },
];

const toRgba = (hex: string, alpha = 0.22) => {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length !== 6) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  const value = Number.parseInt(normalized, 16);
  if (Number.isNaN(value)) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const heroStats = [
  {
    label: "Backend",
    value: "APIs, data, and reliability",
    detail: "Fault-tolerant services, clean models, and observability.",
  },
  {
    label: "Frontend",
    value: "Design systems and UI delivery",
    detail: "Responsive components, accessible UX, and polish.",
  },
  {
    label: "Delivery",
    value: "Documented, testable milestones",
    detail: "Clear cadence, async updates, and smooth handoff.",
  },
];

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "Stack", link: "#stack" },
  { name: "Contact", link: "#contact" },
];

const noiseButtonClass =
  "h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-sm text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]";

const noiseButtonProps = {
  containerClassName: "w-fit rounded-full p-2",
  gradientColors: [
    "rgb(255, 100, 150)",
    "rgb(100, 150, 255)",
    "rgb(255, 200, 100)",
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          className="left-[-140px] top-[5%] h-[420px] w-[420px]"
          fill="rgba(14,116,144,0.6)"
        />
        <Spotlight
          className="right-[-160px] top-[15%] h-[420px] w-[420px]"
          fill="rgba(234,179,8,0.5)"
        />
      </div>

      <FloatingNav
        navItems={navItems}
        leftSlot={
          <div className="flex items-center gap-3 pl-1 text-xs uppercase tracking-[0.35em] text-foreground">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <img
                src="/jm1.png"
                alt="James"
                className="h-full w-full rounded-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
            </span>
            <span className="hidden sm:inline">James</span>
          </div>
        }
        rightSlot={
          <div className="flex items-center gap-2 pr-1">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="rounded-full border border-border/70 bg-white/10 px-4 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-white/20"
            >
              <a href="#contact">Book a call</a>
            </Button>
          </div>
        }
      />

      <div className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
          <HeroHighlight
            containerClassName="h-auto min-h-[34rem] bg-transparent py-16"
            className="mx-auto w-full max-w-6xl"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="w-fit border-white/10 bg-transparent text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  Backend-first full stack developer
                </Badge>
                <div className="space-y-5">
                  <h1 className="text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                    <TextGenerateEffect
                      words="Reliable systems with a product-ready finish."
                      className="text-foreground"
                    />
                  </h1>
                  <p className="max-w-xl text-lg text-muted-foreground">
                    I build scalable services and crisp interfaces. Core
                    strengths in Python, Java, PHP, and Next.js, with confident
                    CSS, Tailwind CSS, and Material UI delivery.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <NoiseBackground {...noiseButtonProps}>
                    <a href="#contact" className={noiseButtonClass}>
                      Start a project &rarr;
                    </a>
                  </NoiseBackground>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="rounded-full"
                  >
                    <a href="#work" className="flex items-center gap-2">
                      View selected work
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3">
                {heroStats.map((item, index) => (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 bg-transparent px-5 py-3 transition hover:-translate-y-1"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-400/60 via-emerald-400/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-0 left-6 h-px w-16 bg-gradient-to-r from-cyan-400/70 to-transparent opacity-60" />
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-base font-medium leading-snug text-foreground">
                          {item.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HeroHighlight>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Services
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
              Backend strength with full stack range.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              I partner with teams who want robust infrastructure and thoughtful
              UX delivered with clarity.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <CardSpotlight
                  key={service.title}
                  className="group relative overflow-hidden border-border/60 bg-card/70 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-border hover:bg-card/90"
                  color={service.spotlight}
                >
                  <span
                    className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full opacity-40 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${service.accent} 0%, transparent 70%)`,
                    }}
                  />
                  <CardHeader className="relative z-10 p-0">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-foreground transition group-hover:scale-[1.05]"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent} 0%, rgba(255,255,255,0.06) 70%)`,
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Service
                          </p>
                          <CardTitle className="text-lg text-foreground">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60">
                        Core
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4 px-0 pb-0 pt-4">
                    <CardDescription className="text-sm text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <Badge
                          key={point}
                          variant="outline"
                          className="border-border/60 bg-background/40 text-[11px] font-medium text-muted-foreground"
                        >
                          {point}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </CardSpotlight>
              );
            })}
          </div>
        </section>

        <section id="work" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Systems that stay reliable as teams grow.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden border-border/60 bg-card/70 transition hover:-translate-y-1 hover:border-border"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Tech stack
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Backend-heavy, product-ready.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Battle-tested tools for data, APIs, and modern UI delivery.
            </p>
          </div>
          <div className="mt-10">
            <div className="group/stack grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackItems.map((item) => {
                const spotlight = toRgba(item.color, 0.22);
                return (
                  <CardSpotlight
                    key={item.name}
                    color={spotlight}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-4 transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] group-hover/stack:opacity-60 hover:opacity-100"
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <img
                          src={
                            item.logo ??
                            `https://api.iconify.design/${item.icon}.svg?color=%23${item.color}`
                          }
                          alt={`${item.name} logo`}
                          className="h-5 w-5"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {item.area}
                      </span>
                    </div>
                    <p className="relative z-10 mt-4 text-lg font-semibold text-foreground">
                      {item.name}
                    </p>
                  </CardSpotlight>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Process
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Clear steps, no surprises.
            </h2>
          </div>
          <div className="mt-10">
            <ExpandableCards items={process} />
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10"
        >
          <Card className="relative overflow-hidden border-border/60 bg-card/70">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.2),transparent_60%)]" />
            <CardContent className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Let us build
                </p>
                <h2 className="text-3xl font-semibold text-foreground">
                  Ready for a backend that stays calm under pressure?
                </h2>
                <p className="max-w-xl text-muted-foreground">
                  Share your roadmap, and I will propose an approach with clear
                  milestones, risks, and delivery plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <NoiseBackground {...noiseButtonProps}>
                  <a href="mailto:hello@yourdomain.com" className={noiseButtonClass}>
                    Email me &rarr;
                  </a>
                </NoiseBackground>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <a href="#services">See services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

     
    </div>
  );
}
