import type { SiteConfig } from "@/types/config";

export const devicesSectionConfig: SiteConfig["mySection"]["devices"] = {
	enable: true,
	slug: "/devices/",
	navLabel: "Devices",
	title: "Devices",
	subtitle: "The hardware that supports my study, building, sketching, and late-night iteration loops.",
	groups: [
		{
			group: "Daily Carry",
			items: [
				{
					name: "MacBook Air",
					type: "Laptop",
					image: "assets/images/BannerA1.png",
					description:
						"My main machine for writing, prototyping, and shipping small experiments quickly.",
					specs: [
						{ label: "Chip", value: "Apple Silicon" },
						{ label: "Use", value: "Coding / Writing / Design" },
						{ label: "Notes", value: "Quiet, reliable, easy to carry" },
					],
				},
			],
		},
		{
			group: "Creative Setup",
			items: [
				{
					name: "iPad",
					type: "Tablet",
					image: "assets/images/Avt.jpg",
					description:
						"Used for sketching layouts, marking references, and collecting visual ideas.",
					specs: [
						{ label: "Use", value: "Sketch / Notes / Reading" },
						{ label: "Strength", value: "Fast visual iteration" },
					],
				},
			],
		},
	],
};
