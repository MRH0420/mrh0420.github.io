import type { SiteConfig } from "@/types/config";

export const projectsPageConfig: SiteConfig["projectSection"]["projects"] = {
	enable: true,
	slug: "/projects/",
	navLabel: "Projects",
	title: "Projects",
	subtitle: "A portfolio-oriented project archive designed for high-agency student applications, with evidence, outcomes, and measurable impact.",
	competitionResults: [
		{
			title: "CTB National Economics Challenge",
			year: "2025",
			result: "National Finalist",
			scope: "Competition",
		},
		{
			title: "Conrad Challenge",
			year: "2025",
			result: "Innovation Shortlist",
			scope: "Innovation",
		},
		{
			title: "USACO",
			year: "2024",
			result: "Gold Division",
			scope: "Algorithms",
		},
		{
			title: "HIMCM",
			year: "2024",
			result: "Finalist",
			scope: "Mathmetics",
		},
		{
			title: "IMMC",
			year: "2025",
			result: "Finalist (top 7%)",
			scope: "Mathmetics",
		},
		{
			title: "VEX Robotics Competition",
			year: "2025",
			result: "1st prize(top 10%)",
			scope: "Robotics",
		},
	],
	items: [
		{
			id: "research-copilot",
			title: "Atlas Research Copilot",
			summary: "An AI-native research workspace that compresses literature review, citation tracing, and experiment note synthesis for student researchers.",
			category: "AI x Research",
			status: "shipped",
			period: "2025 - 2026",
			cover: "assets/images/BannerA1.png",
			stack: ["TypeScript", "Next.js", "Python", "RAG", "Supabase"],
			featured: true,
			metrics: [
				{ label: "Users", value: "240+" },
				{ label: "Papers Indexed", value: "12k+" },
				{ label: "Review Time Saved", value: "63%" },
			],
			highlights: [
				"Designed the retrieval and evidence-ranking pipeline end to end.",
				"Built reviewer-mode outputs that make claims auditable for admissions and competition judges.",
			],
			awards: ["Conrad Challenge Innovation Shortlist"],
			links: [
				{ label: "GitHub", url: "https://github.com/MRH0420" },
			],
		},
		{
			id: "moonshot-ops",
			title: "Moonshot Student Ops Dashboard",
			summary: "A decision-support dashboard for student teams to track projects, milestones, outreach, and academic load in one place.",
			category: "Systems x Product",
			status: "completed",
			period: "2025",
			cover: "assets/images/115293810_p0.png",
			stack: ["Astro", "TypeScript", "PostgreSQL", "Figma"],
			featured: true,
			metrics: [
				{ label: "Teams Supported", value: "18" },
				{ label: "Weekly Active Users", value: "70+" },
				{ label: "Task Completion Lift", value: "+31%" },
			],
			highlights: [
				"Translated a messy student workflow into a measurable operating system.",
				"Owned product design, full-stack implementation, and feedback iteration.",
			],
			links: [
				{ label: "Case Study", url: "https://github.com/MRH0420" },
			],
		},
		{
			id: "portfolio-engine",
			title: "Narrative Portfolio Engine",
			summary: "A structured portfolio generator that turns scattered achievements, competitions, and projects into application-ready story modules.",
			category: "Writing x Data",
			status: "research",
			period: "2026",
			cover: "assets/images/Suwa_lake.png",
			stack: ["Astro", "MDX", "TypeScript", "Prompt Design"],
			metrics: [
				{ label: "Story Modules", value: "45+" },
				{ label: "Portfolio Variants", value: "12" },
				{ label: "Essay Reuse Rate", value: "78%" },
			],
			highlights: [
				"Encodes extracurricular evidence into reusable admissions narratives.",
			],
		},
		{
			id: "creative-lab",
			title: "Creative Media Lab",
			summary: "A content and design pipeline for illustration-led storytelling, event visuals, and motion assets used across personal projects.",
			category: "Design x Media",
			status: "in_progress",
			period: "2024 - Present",
			cover: "assets/images/141819875_p0.jpg",
			stack: ["Blender", "Premiere Pro", "Illustrator", "Figma"],
			metrics: [
				{ label: "Assets Produced", value: "300+" },
				{ label: "Campaigns", value: "14" },
				{ label: "Content Reach", value: "85k+" },
			],
			highlights: [
				"Bridges technical execution with strong visual storytelling for portfolio presentation.",
			],
		},
	],
};
