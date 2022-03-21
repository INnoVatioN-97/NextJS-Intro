import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import Head from 'next/head'; //Next.js 에서 제공하는 기본적인 대가리 라이브러리.
import HeadTitle from '../components/HeadTitle';

export default function Home() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<HeadTitle title='Home' />
			<h1 className='active'>Hello</h1>
		</div>
	);
}
