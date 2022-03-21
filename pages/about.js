// 아무런 route 설정을 안해줬는데도 그냥 파일명대로 /about만 치니까
// 이 페이지가 나옴. 신기방기.

import Head from 'next/head';
import HeadTitle from '../components/HeadTitle';
import { NavBar } from '../components/NavBar';

export default function About() {
	return (
		<div>
			<HeadTitle title='About' />
			<h1>About</h1>
		</div>
	);
}
