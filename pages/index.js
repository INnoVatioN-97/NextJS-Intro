import { useState } from 'react';
import { NavBar } from '../components/NavBar';

export default function Home() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<h1 className='active'>Hello</h1>
		</div>
	);
}
