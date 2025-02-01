module.exports = function buildResolvers({ aliases }) {
	const { features, utils, constants } = aliases;

	return {
		alias: {
			"@features": features,
			"@utils": utils,
			"@constants": constants,
		},
	};
};
