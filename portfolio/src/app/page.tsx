import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StackCarousel } from "@/components/stack-carousel";

const services = [
  {
    title: "Backend architecture",
    description:
      "Designing resilient APIs, data models, and services that stay fast under real traffic.",
    points: ["API-first design", "Data modeling", "Reliability patterns"],
  },
  {
    title: "Systems integration",
    description:
      "Connecting payments, auth, and third-party services with clean, secure workflows.",
    points: ["3rd-party integrations", "Auth + security", "Event pipelines"],
  },
  {
    title: "Product engineering",
    description:
      "Shipping full stack features with crisp UI and robust infrastructure behind it.",
    points: ["MVP to scale", "Observability", "Performance tuning"],
  },
];

const projects = [
  {
    title: "Ledgerline",
    description:
      "A fintech operations layer for automated reconciliation and reporting.",
    tags: ["Python", "Postgres", "Kafka"],
    outcome: "Designed a backend core with clear audit trails and low latency.",
  },
  {
    title: "Clinic Atlas",
    description:
      "Patient scheduling and workflow orchestration for multi-site clinics.",
    tags: ["Java", "REST APIs", "Redis"],
    outcome: "Unified intake, scheduling, and analytics into a single system.",
  },
  {
    title: "Signalroom",
    description:
      "Customer intelligence dashboard for support and success teams.",
    tags: ["PHP", "MySQL", "Webhooks"],
    outcome: "Streamlined cross-tool data sync with actionable reporting.",
  },
];

const process = [
  {
    step: "Discovery",
    detail: "Short alignment sprint to define outcomes, risks, and scope.",
  },
  {
    step: "Design",
    detail: "System diagrams, API contracts, and data models before code.",
  },
  {
    step: "Build",
    detail: "Iterative delivery with testable milestones and clear docs.",
  },
  {
    step: "Launch",
    detail: "Deployment, observability, and post-launch optimizations.",
  },
];

const coreStack = [
  {
    name: "Python",
    logo: "/logos/python.svg",
    detail: "APIs + automation",
  },
  {
    name: "Java",
    logo: "/logos/java.svg",
    detail: "Enterprise services",
  },
  {
    name: "PHP",
    logo: "/logos/php.svg",
    detail: "Web platforms",
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    detail: "Full stack UI",
  },
  {
    name: "CSS",
    logo: "/logos/css.svg",
    detail: "Design systems",
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwindcss.svg",
    detail: "Utility styling",
  },
  {
    name: "Material UI",
    logo: "/logos/mui.svg",
    detail: "Component library",
  },
  {
    name: "Docker",
    logo: "/logos/docker.svg",
    detail: "Containerized deploys",
  },
  {
    name: "FastAPI",
    logo: "/logos/fastapi.svg",
    detail: "Async APIs",
  },
  {
    name: "Django",
    logo: "/logos/django.svg",
    detail: "Robust backends",
  },
];

const coreStackWithTooling = [
  ...coreStack,
  {
    name: "Swagger UI",
    logo: "/logos/swagger.svg",
    detail: "API documentation",
  },
  {
    name: "Postman",
    logo: "/logos/postman.svg",
    detail: "API testing",
  },
];

const stackCount = coreStackWithTooling.length;
const stackHighlights = [
  "Backend systems",
  "API-first delivery",
  "UI polish",
  "Containerized deploys",
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-140px] top-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute left-[-160px] top-[45%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(20,83,45,0.28),transparent_70%)] blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-black/5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,116,144,0.9),rgba(234,179,8,0.85),rgba(14,116,144,0.9))] text-xs font-semibold text-white">
              JM
            </div> */}
            <div className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink)]">
              James
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#services">
              Services
            </a>
            <a className="hover:text-foreground" href="#work">
              Work
            </a>
            <a className="hover:text-foreground" href="#process">
              Process
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden md:inline-flex">
              Available for new builds
            </Badge>
            <Button asChild size="sm" className="rounded-full px-5">
              <a href="#contact">Book a call</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <Badge className="w-fit bg-white/70 text-[color:var(--ink)] shadow-sm backdrop-blur">
                Backend-first full stack developer
              </Badge>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold leading-[1.05] text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
                  Reliable backends with a clean, product-ready finish.
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                  I build scalable services and crisp interfaces. Core strengths
                  in Python, Java, PHP, and Next.js, with confident CSS,
                  Tailwind CSS, and Material UI delivery.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href="#contact">Start a project</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6"
                >
                  <a href="#work">View selected work</a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Backend depth</CardTitle>
                    <CardDescription>
                      Architecture, data, and performance.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Clean delivery</CardTitle>
                    <CardDescription>
                      Documented, tested, and maintainable.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-black/10 bg-white/70 shadow-sm backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Product focus</CardTitle>
                    <CardDescription>
                      Fast iterations without fragile shortcuts.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <Card className="relative overflow-hidden border-black/10 bg-white/80 shadow-lg backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.12),transparent_55%)]" />
              <CardHeader className="relative space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--brand)]" />
                  Focus
                  <span className="h-px flex-1 bg-black/10" />
                </div>
                <CardTitle className="text-xl">
                  Building systems that scale with confidence.
                </CardTitle>
                <CardDescription>
                  Focused delivery with calm, predictable milestones.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Focus areas
                  </p>
                  <div className="mt-3 grid gap-2">
                    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white/80 px-3 py-2">
                      <span className="text-sm text-[color:var(--ink)]">
                        API design
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white/80 px-3 py-2">
                      <span className="text-sm text-[color:var(--ink)]">
                        Scalable data
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-2)]" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white/80 px-3 py-2">
                      <span className="text-sm text-[color:var(--ink)]">
                        Cloud deploys
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white/80 px-3 py-2">
                      <span className="text-sm text-[color:var(--ink)]">
                        Dashboards
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-2)]" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-muted-foreground">
                  <span className="font-medium text-[color:var(--ink)]">
                    Based in GMT+3
                  </span>
                  <span>Working async with global teams.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Services
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="max-w-2xl text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
                Backend strength with full stack range.
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                I partner with teams who want robust infrastructure and
                thoughtful UX delivered with clarity.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-black/10 bg-white/70 shadow-sm backdrop-blur"
              >
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
                Systems that stay reliable as teams grow.
              </h2>
            </div>
            {/* <Badge
              variant="outline"
              className="hidden items-center gap-2 border-black/10 bg-white/70 text-[10px] uppercase tracking-[0.3em] text-muted-foreground shadow-sm backdrop-blur md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
              Case studies by request
            </Badge> */}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex h-full flex-col border-black/10 bg-white/75 shadow-sm backdrop-blur"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
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

        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Tech stack
              </p>
              <h2 className="text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
                Backend-heavy, product-ready.
              </h2>
              <p className="text-muted-foreground">
                I build with battle-tested stacks and add modern frontend layers
                where they serve the product.
              </p>
            </div>
            <Card className="relative overflow-hidden border-black/10 bg-white/80 shadow-lg backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(234,179,8,0.16),transparent_50%)]" />
              <CardHeader className="relative pb-2">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl text-[color:var(--ink)] sm:text-3xl">
                      Core stack gallery
                    </CardTitle>
                    <CardDescription>
                      Backend-first tools with polished frontend delivery.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{stackCount} technologies</Badge>
                    <Badge variant="outline">Production-ready</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <StackCarousel items={coreStackWithTooling} />
                <div className="flex flex-wrap gap-2">
                  {stackHighlights.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-white/70 text-muted-foreground shadow-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Process
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
              Clear steps, no surprises.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Card
                key={item.step}
                className="border-black/10 bg-white/75 shadow-sm backdrop-blur"
              >
                <CardHeader>
                  <p className="text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <CardTitle>{item.step}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10"
        >
          <Card className="border-black/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.95),rgba(255,255,255,0.75))] shadow-lg backdrop-blur">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Let us build
                </p>
                <h2 className="text-3xl font-semibold text-[color:var(--ink)]">
                  Ready for a backend that stays calm under pressure?
                </h2>
                <p className="max-w-xl text-muted-foreground">
                  Share your roadmap, and I will propose an approach with clear
                  milestones, risks, and delivery plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href="mailto:hello@yourdomain.com">Email me</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6"
                >
                  <a href="#services">See services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 border-t border-black/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>James. Backend-focused full stack developer.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-foreground" href="mailto:hello@yourdomain.com">
              hello@yourdomain.com
            </a>
            <span className="hidden md:inline">/</span>
            <a className="hover:text-foreground" href="#work">
              Selected work
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
