import Head from 'next/head';
import { NavBar } from './NavBar';

/**
 * NextJS 개발자들이 주로 사용하는 국-룰 패턴.
 * 레이아웃 패턴을 만들어 부트스트랩 템플릿마냥
 * 공통화된 레이아웃을 만들어 이를 _app.js 에서
 * 최상위 컴포넌트로 만들어 하위 컴포넌트들을 감싸준다.
 */
const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>{`${children} | Next Movies`}</title>
			</Head>
			<NavBar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
