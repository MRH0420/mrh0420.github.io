import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { animeSectionConfig } from "./components/my_config/anime";
import { gallerySectionConfig } from "./components/my_config/gallery";
import { diarySectionConfig } from "./components/my_config/diary";
import { devicesSectionConfig } from "./components/my_config/devices";

export const siteConfig: SiteConfig = {
	title: "九重樱叶",
	subtitle: "九重樱叶",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	theme: {
		toggleable: false, // Allow visitors to switch between light, dark, and system modes
		mode: "dark", // When toggleable is false, the site will stay in this mode
	},
	wallpaper: {
		enable: true, // Show the wallpaper layer behind the page content
		src: "assets/images/115293810_p0.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	},
	banner: {
		enable: true,
		src: "assets/images/BannerA1.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		// src: '/assets/images/Suwa_lake.png',
		position: "center",
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "祥子与睦的轮舞", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/135029138", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
	backToTop: {
		image: {
			enable: true, // Show the rotating image inside the back-to-top button
			src: "assets/images/taichi.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		},
	},
	clickEffect: {
		enable: true, // Show a theme-colored particle burst when the visitor clicks on the page
		disableOnMobile: false, // Disable the click effect on touch devices when needed
		excludeSelectors: [], // Skip selected elements when needed while still allowing buttons to trigger the effect
	},
	mySection: {
		enable: true, // Enable the grouped "My" navigation and its feature pages
		navLabel: "My", // Label shown in the desktop dropdown and mobile navigation panel
		anime: animeSectionConfig,
		gallery: gallerySectionConfig,
		diary: diarySectionConfig,
		devices: devicesSectionConfig,
	},
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: siteConfig.mySection.navLabel,
			url: siteConfig.mySection.anime.slug,
			children: [
				...(siteConfig.mySection.anime.enable
					? [{ name: siteConfig.mySection.anime.navLabel, url: siteConfig.mySection.anime.slug }]
					: []),
				...(siteConfig.mySection.gallery.enable
					? [{ name: siteConfig.mySection.gallery.navLabel, url: siteConfig.mySection.gallery.slug }]
					: []),
				...(siteConfig.mySection.diary.enable
					? [{ name: siteConfig.mySection.diary.navLabel, url: siteConfig.mySection.diary.slug }]
					: []),
				...(siteConfig.mySection.devices.enable
					? [{ name: siteConfig.mySection.devices.navLabel, url: siteConfig.mySection.devices.slug }]
					: []),
			],
		},
		{
			name: "GitHub",
			url: "https://github.com/MRH0420", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Avt.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Ruihao Ma",
	bio: "Grade 11 @ Moonshot Academy | CS x Design | Project Builder | Creative Creator",
	//bio: "PoPiPa PiPoPa PoPiPaPaPiPoPa!",
	links: [
		{
			name: "Mail",
			icon: "fa6-regular:envelope", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "mailto:mrh1766634751@gmail.com",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546592862800437",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/MRH0420",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
