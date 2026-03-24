type AssetModule = {
	src: string;
};

const assetModules = import.meta.glob<AssetModule>("../assets/**/*", {
	eager: true,
	import: "default",
});

export function resolveConfiguredAsset(assetPath?: string): string | undefined {
	if (!assetPath) return undefined;
	if (
		assetPath.startsWith("/") ||
		assetPath.startsWith("http://") ||
		assetPath.startsWith("https://")
	) {
		return assetPath;
	}

	const resolved = assetModules[`../${assetPath}`];
	if (!resolved) return undefined;
	return typeof resolved === "string" ? resolved : resolved.src;
}
