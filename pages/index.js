import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import Head from 'next/head'; //Next.js 에서 제공하는 기본적인 대가리 라이브러리.
import HeadTitle from '../components/HeadTitle';

const API_KEY = '60991f783f7003dd7cf77e357febbd35';

export default function Home() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		(async () => {
			const { results } = await (
				await fetch(
					`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`
				)
			).json();
			console.log(results);
			setMovies(results);
		})();
	}, []);

	return (
		<div>
			<HeadTitle title='Home' />
			{!movies && <h4>Loading...</h4>}
			{movies?.map((movie) => {
				return (
					<div key={movie.id}>
						<h4>{movie.original_title}</h4>
					</div>
				);
			})}
		</div>
	);
}
