module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: '/contact',
				destination: '/form',
				permanent: false,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/api/movies',
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko`,
			},
		];
	},
};

// module.exports = nextConfig;
