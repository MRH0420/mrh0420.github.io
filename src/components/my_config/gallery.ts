import type { SiteConfig } from "@/types/config";

export const gallerySectionConfig: SiteConfig["mySection"]["gallery"] = {
	enable: true,
	slug: "/gallery/",
	navLabel: "Gallery",
	title: "Gallery",
	subtitle: "Organized visual collections you can enter one by one instead of a single flat wall of images.",
	categories: [
		{
			slug: "blue-atmosphere",
			title: "Blue Atmosphere",
			description: "Cool, distant scenes with softened glass light and lake-like quietness.",
			cover: "assets/images/115293810_p0.png",
			photos: [
				"assets/images/115293810_p0.png",
				"assets/images/Suwa_lake.png",
				"assets/images/Suwa_2.png",
				"assets/images/BannerA1.png",
			],
		},
		{
			slug: "character-focus",
			title: "Character Focus",
			description: "Poster-like compositions built around stronger character silhouettes.",
			cover: "assets/images/141819875_p0.jpg",
			photos: [
				"assets/images/141819875_p0.jpg",
				"assets/images/137010221_p0.png",
				"assets/images/135029138_p0.jpg",
				"assets/images/244966_p0.jpg",
			],
		},
	],
};
