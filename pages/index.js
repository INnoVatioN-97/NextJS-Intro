import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import Head from 'next/head'; //Next.js 에서 제공하는 기본적인 대가리 라이브러리.
import HeadTitle from '../components/HeadTitle';

export default function Home() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		(async () => {
			// api 주소를 next.config.js 내에 저장해두고 주소를 변조함. api 숨기기.
			const { results } = await (await fetch('/api/movies')).json();
			setMovies(results);
			console.log(results);
		})();
	}, []);
	return (
		<div className='container'>
			<HeadTitle title='Home' />
			{!movies && <h4>Loading...</h4>}
			{movies?.map((movie) => (
				<div className='movie' key={movie.id}>
					<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
					<h4>{movie.title}</h4>
				</div>
			))}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}
