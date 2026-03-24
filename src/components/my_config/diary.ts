import type { SiteConfig } from "@/types/config";

export const diarySectionConfig: SiteConfig["mySection"]["diary"] = {
	enable: true,
	slug: "/diary/",
	navLabel: "Diary",
	title: "Diary",
	subtitle: "Short notes, progress snapshots, and the small details that would be too fleeting for a full post.",
	entries: [
		{
			date: "2026-03-20T19:40:00+08:00",
			content:
				"Adjusted the homepage cards again today. The goal was to keep the Koharu-like silhouette while letting the blue glass mood stay unmistakably mine.",
			mood: "Focused",
			location: "Moonshot Academy",
			tags: ["UI", "Astro", "Design"],
			images: ["assets/images/137010221_p0.png"],
		},
		{
			date: "2026-03-18T22:15:00+08:00",
			content:
				"Refined the banner transition so the hero and the main content finally feel like a single scene instead of two stacked layers.",
			mood: "Relieved",
			tags: ["Frontend", "Polish"],
		},
	],
};
