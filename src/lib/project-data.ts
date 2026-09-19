/** A step in a project's architecture flow: a single stage, or a group of parallel stages. */
export type FlowNode = string | { label?: string; items: string[] };

export type ProjectItem = {
  title: string;
  category: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  link?: string;
  /** Screenshot for the card header. Projects without one show their architecture flow. */
  image?: string;
  flow?: FlowNode[];
};

export const projects: ProjectItem[] = [
  {
    title: "EnvDrift",
    category: "Developer tooling · Event-driven",
    pitch:
      "Catches environment drift across engineering teams before it turns into a “works on my machine” incident.",
    highlights: [
      "Snapshots persist to PostgreSQL even when Kafka is down",
      "3 isolated Celery queues so slow AI jobs never block drift detection",
      "Idempotency keys and Redis dedup turn duplicate jobs into no-ops",
    ],
    stack: ["Python", "FastAPI", "Kafka", "Celery", "PostgreSQL", "Redis", "Docker"],
    flow: ["CLI", "FastAPI", "Kafka", { label: "Celery", items: ["drift", "ai", "notify"] }],
  },
  {
    title: "K8s Signal Aggregator",
    category: "Observability · Open source",
    pitch:
      "Correlates metrics, logs, and traces across 4 microservices and explains the root cause in plain English.",
    highlights: [
      "Parallel queries to Prometheus, Loki, and Jaeger, correlated in under 2s",
      "Normalizes clock drift instead of widening the correlation window",
      "Rule engine surfaces only patterns above threshold",
    ],
    stack: ["Go", "Python", "OpenTelemetry", "Docker", "Kubernetes"],
    flow: [{ items: ["Prometheus", "Loki", "Jaeger"] }, "Correlate", "LLM summary"],
  },
  {
    title: "Tommy Chat",
    category: "AI agent · Cal Hacks 12.0",
    pitch:
      "An AI companion that moderates multiplayer game chat in real time, with its own voice and personality.",
    highlights: [
      "Listens to the group and speaks only when it has something meaningful to add",
      "Claude for personality and reasoning, ElevenLabs for the Talking Tom voice",
      "FastAPI and Socket.IO for real-time rooms",
    ],
    stack: ["FastAPI", "Socket.IO", "Claude API", "ElevenLabs"],
    image: "/images/tommy-chat.png",
  },
  {
    title: "FitSense",
    category: "Generative AI · Hackathon",
    pitch:
      "Turns the clothes you already own into 3 complete outfits for the occasion, weather, and mood, with virtual try-on.",
    highlights: [
      "Built on Replit in under 5 hours at a hackathon",
      "Gemini 2.5 Flash tags every item for color, fabric, and fit",
      "MiniMax picks the outfits and renders photorealistic try-ons",
    ],
    stack: ["Next.js", "TypeScript", "Convex", "Gemini", "MiniMax"],
    flow: ["Photos", { items: ["Gemini", "Weather"] }, "MiniMax", "Try-on"],
  },
  {
    title: "Emergency Alert System",
    category: "Rules engine · Alerting",
    pitch:
      "Operators define conditions like temp > 40°C AND humidity < 20%, and the system alerts over email, SMS, and push.",
    highlights: [
      "Evaluates up to 100 conditions per hour from external API feeds",
      "Cooldown windows and alert-ID dedup cut duplicate alerts by 60%",
      "React dashboard for rule management and alert history, live over WebSockets",
    ],
    stack: ["Spring Boot", "MongoDB", "React", "TypeScript", "Next.js"],
    flow: ["APIs", "Rules", "Dedup", { items: ["Email", "SMS", "Push"] }],
  },
  {
    title: "Inn Sync",
    category: "Full stack · Payments",
    pitch:
      "A rental platform where hosts and guests manage listings, bookings, and payments in one place.",
    highlights: [
      "Stripe Checkout and webhooks with idempotent actions",
      "Prevents overlapping reservations and duplicate charges",
      "Role-based permissions on Prisma and Supabase Postgres",
    ],
    stack: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Stripe"],
    link: "https://innsync-gamma.vercel.app",
    image: "/images/inn-sync.png",
  },
];
