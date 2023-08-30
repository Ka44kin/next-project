module.exports = {
  webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: { not: /url/ },
			use: ['@svgr/webpack'],
		});

		return config;
	}
};