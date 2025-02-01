const { resolve } = require("path");

const PATHS = {
	entry: resolve("src", "index.js"),
	build: resolve("dist"),
	html: resolve("public", "index.html"),
	src: resolve("src"),
	favicon: resolve("public", "favicon.ico"),
};

const ALIASES = {
	features: resolve("src", "features"),
	utils: resolve("src", "utils"),
	constants: resolve("src", "constants"),
};
const MODE = "development";
const PORT = 3000;

module.exports = { PATHS, MODE, PORT, ALIASES };
