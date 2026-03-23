import { visit } from "unist-util-visit";

function escapeHtmlAttribute(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

export function remarkInfographic() {
	return (tree) => {
		visit(tree, "code", (node, index, parent) => {
			if (!parent || index === undefined || node.lang !== "infographic") {
				return;
			}

			// Convert infographic fences into lightweight HTML placeholders before code highlighting runs.
			const encodedSource = escapeHtmlAttribute(
				Buffer.from(node.value, "utf8").toString("base64"),
			);

			parent.children[index] = {
				type: "html",
				value: `<div class="infographic-block not-prose" data-infographic-source="${encodedSource}"></div>`,
			};
		});
	};
}
