import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	theme: {
		toggleable: boolean;
		mode: LIGHT_DARK_MODE;
	};
	wallpaper: {
		enable: boolean;
		src: string;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: string;
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
	backToTop: {
		image: {
			enable: boolean;
			src: string;
		};
	};
	clickEffect: {
		enable: boolean;
		disableOnMobile: boolean;
		excludeSelectors: string[];
	};
	mySection: MySectionConfig;
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	children?: NavBarLink[];
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};

export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "on_hold"
	| "dropped";

export type MyAnimeItem = {
	title: string;
	cover: string;
	year: number;
	studio: string;
	status: AnimeStatus;
	rating: number;
	progress?: number;
	totalEpisodes?: number;
	genre: string[];
	description: string;
	link?: string;
};

export type MyBangumiSubjectTypeKey =
	| "anime"
	| "book"
	| "music"
	| "game"
	| "real";

export type MyAnimeBangumiConfig = {
	enable: boolean;
	userId: string;
	accessToken: string;
	defaultTab: MyBangumiSubjectTypeKey;
	subjectTypes: MyBangumiSubjectTypeKey[];
	pageSize: number;
};

export type MyAnimeEventStatus = "wish" | "visited";

export type MyAnimeEventItem = {
	cover: string;
	description: string;
	date: string;
	status: MyAnimeEventStatus;
	location?: string;
	link?: string;
};

export type MyGalleryCategory = {
	slug: string;
	title: string;
	description?: string;
	cover: string;
	photos: string[];
};

export type MyDiaryEntry = {
	date: string;
	content: string;
	mood?: string;
	location?: string;
	tags?: string[];
	images?: string[];
};

export type MyDeviceSpec = {
	label: string;
	value: string;
};

export type MyDeviceItem = {
	name: string;
	type: string;
	image: string;
	description?: string;
	specs: MyDeviceSpec[];
};

export type MyDeviceGroup = {
	group: string;
	items: MyDeviceItem[];
};

export type MyFeaturePageConfig = {
	enable: boolean;
	slug: string;
	navLabel: string;
	title: string;
	subtitle: string;
};

export type MySectionConfig = {
	enable: boolean;
	navLabel: string;
	anime: MyFeaturePageConfig & {
		mode: "local" | "bangumi";
		bangumi: MyAnimeBangumiConfig;
		items: MyAnimeItem[];
		events: MyAnimeEventItem[];
	};
	gallery: MyFeaturePageConfig & {
		categories: MyGalleryCategory[];
	};
	diary: MyFeaturePageConfig & {
		entries: MyDiaryEntry[];
	};
	devices: MyFeaturePageConfig & {
		groups: MyDeviceGroup[];
	};
};
