/**
 * 부트스트랩 템플릿에 공통된 navBar 등이 있는것처럼
 * 페이지의 형식(공통으로 들어갈 nav나 색상과 같은것)을 정의하는 곳.
 * Next는 페이지들을 렌더링 하기전에 무적권 app.js부터 본다. 그 다음 다른페이지를 읽는다.
 */

import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
