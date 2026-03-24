import type { SiteConfig } from "@/types/config";

export const animeSectionConfig: SiteConfig["mySection"]["anime"] = {
	enable: true,
	slug: "/anime/",
	navLabel: "Anime",
	title: "Bangumi",
	subtitle: "A media shelf that can switch between local curation and Bangumi syncing.",
	mode: "bangumi",
	bangumi: {
		enable: true,
		userId: "1229171",
		accessToken: "397HLrGhzAbOMUsRsdG7kLFWyDAMxNX98P5ktpLi",
		defaultTab: "anime",
		subjectTypes: ["anime", "music", "game"],
		pageSize: 12,
	},
	items: [],
	events: [
		{
			cover: "assets/images/events/RD-Sounds20th.png",
			description: "凋叶棕20周年live",
			date: "2027.2",
			status: "wish", // Planned event that the user wants to attend
			location: "Tokyo",
		},
		{
			cover: "assets/images/events/Lehre der Rose.png",
			description: "Roselia「Lehre der Rose」",
			date: "2026.8.29-2026.8.30",
			status: "wish", // Planned event that the user wants to attend
			location: "Odaiba, Tokyo",
		},
		{
			cover: "assets/images/events/Comiket.png",
			description: "Comiket C108",
			date: "2026.8.15-2026.8.16",
			status: "wish", // Planned event that the user wants to attend
			location: "Odaiba, Tokyo",
		},
		{
			cover: "assets/images/events/MomentMemory.png",
			description: "MyGO!!!!!×Ave Mujica ツーマンライブ「“moment / memory”」",
			date: "2026.3.1",
			status: "visited", // Event that the user has already attended
			location: "Yokohama, Kanagawa",
		},
		{
			cover: "assets/images/events/B10.png",
			description: "BanGDream! 10th Anniversary Live「In the name of BanG Dream!」",
			date: "2026.2.28",
			status: "visited", // Event that the user has already attended
			location: "Yokohama, Kanagawa",
		},
		{
			cover: "assets/images/events/Neuweltfahrt.png",
			description: "[Cancelled] Roselia ASIA TOUR「Neuweltfahrt」",
			date: "2026.1.16-2026.1.17",
			status: "wish", // Event that the user has already attended
			location: "Shanghai",
		},
		{
			cover: "assets/images/events/MygoMujica2025.png",
			description: "MyGO!!!!!×Ave Mujica 合同ライブ「わかれ道の、その先へ」上海追加公演",
			date: "2025.10.11-2025.10.12",
			status: "wish", // Event that the user has already attended
			location: "Shanghai",
		},
		{
			cover: "assets/images/events/BML25.png",
			description: "Bilibili Macro Link 2025",
			date: "2025.7.12-2025.7.14",
			status: "wish", // Event that the user has already attended
			location: "Shanghai",
		},
		{
			cover: "assets/images/events/hypergryph_ky2025.jpg",
			description: "音律联觉2025:熠曲丰碑",
			date: "2025.4.30-2025.5.4",
			status: "wish", // Event that the user has already attended
			location: "Shanghai",
		},
		{
			cover: "assets/images/events/Comiket.png",
			description: "Comiket C104",
			date: "2024.8.11-2024.8.12",
			status: "visited", // Planned event that the user wants to attend
			location: "Odaiba, Tokyo",
		},
		{
			cover: "assets/images/events/yodohanabi.png",
			description: "第36回なにわ淀川花火大会",
			date: "2024.8.2",
			status: "visited", // Planned event that the user wants to attend
			location: "Osaka",
		},
	],
};
