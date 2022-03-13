// 아무런 route 설정을 안해줬는데도 그냥 파일명대로 /about만 치니까
// 이 페이지가 나옴. 신기방기.

import { NavBar } from '../components/NavBar';

export default function Potato() {
	return (
		<div>
			<NavBar />
			<h1>About</h1>
		</div>
	);
}
