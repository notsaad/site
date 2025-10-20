export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO date string for consistent formatting
  content: string;
}

// Centralized blog post data so adding new posts stays straightforward.
export const blogPosts: BlogPost[] = [
  {
    slug: "building-saadgpt",
    title: "Building saadGPT",
    summary:
      "A quick dive into why I built saadGPT and the design choices that shaped it.",
    publishedAt: "2025-03-15",
    content: `
saadGPT started as a weekend experiment to automate responses to routine questions I get about my projects and internships. With the rapid tooling around LLMs, I wanted something lightweight, fast, and actually helpful.

### What mattered
- **Latency**: Users bounce if they wait. I optimized the prompt pipeline and caching layer to keep interactions snappy.
- **Personality**: saadGPT should sound like me. I layered system prompts with tone guidelines and conditioned examples.
- **Maintainability**: I wired the agent using a modular tool interface so I can drop in new skills without refactoring the core.

The result? A pragmatic agent that handles outreach, points folks to the right resources, and frees up focus time for deeper work.
    `.trim(),
  },
  {
    slug: "optimizing-learning",
    title: "Optimizing Learning Loops",
    summary:
      "Strategies I use to stay sharp across internships, research, and personal projects.",
    publishedAt: "2025-02-28",
    content: `
Learning isn't linear for me—it's a loop. Every project, class, or paper feeds into the next cycle. Over the past few years I've settled on a rhythm that keeps me curious without burning out.

### The loop
1. **Collect signals**: I keep a running list of questions from day-to-day work. Those become prompts for future deep dives.
2. **Targeted sprints**: Instead of broad study sessions, I pick a single problem (e.g., "debugging a flaky gRPC stream") and go deep for a weekend.
3. **Share early**: Writing short memos or demos forces clarity. The moment something feels ready, I ship it internally or open-source it.

This compounding approach has been the difference between passive absorption and deliberate growth.
    `.trim(),
  },
];
