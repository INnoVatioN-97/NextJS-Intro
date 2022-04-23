const API_KEY = '60991f783f7003dd7cf77e357febbd35';
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
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`,
			},
		];
	},
};

// module.exports = nextConfig;
