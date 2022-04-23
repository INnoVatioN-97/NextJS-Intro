# NextJS Introduction

### "What the fuck is different between Framework vs Library?"

기본적인 프레임워크와 라이브러리의 차이는 다음과 같다.

> "내가 뭔가를 호출해 버무린다" = 라이브러리 (ex: jQuery, React, etc...)
> "누군가가 나를 (내 코드를)호출해 버무린다" = 프레임워크 (ex: Spring, Next 등등)

-   프레임워크에서는 내 코드를 적절한 장소에 잘 넣어만 주고, 프레임워크의 룰에 따르기만 한다면, 알아서 이 코드들을 불러와 적재적소에 배치해주며, 깜찍하게 동작하도록 해준다.

-   라이브러리에서는 내가 필요할 때 불러와 사용하는 식으로, 마치 jQuery, React 처럼 얘네가 없어도 뭐 대충 아무튼 페이지를 바닐라로 조지든 자바기반이면 jsp를 조지든 할 수가 있다. CRA로 만든 리액트앱 초기 세팅도, 폴더명도 뭐든 다 내 삘대로 다 바꿔 쓸수 있다.

-   근데 프레임워크에서는 이러면 혼난다. 기본적으로 정해진 규칙대로 작성해줘야만 오류없이 최고의 효율로 앱이 동작하도록 해주는 엄격한 형아다.

-   넥스트JS는 리액트 기반 **프레임워크**이다. 우리가 평소에 보던 리액트에서는 index.js에서 ReactDOM.render() 안에 뭔가의 페이지를 감싸서 작동시켰는데, 이형은 그런거 없다. 이 형이 원하는대로 pages 폴더에 뭐든 넣고 하는 등의 규칙만 지켜주면 프레임워크가 알아서 내 코드들을 불러와 잘 지지고 볶아준다.

-   넥스트JS는 **SSR**를 지원한다. CRA로 만들었던 페이지들의 경우 클라이언트 사이드 렌더링기반이다 보니 인터넷 속도가 느리면 흰창이 장시간 보이고 극혐이었는데, NextJS의 서버사이드 렌더링을 통해 최소한 React.js 가 불러와지기 전에도 기본적인 HTML페이지의 틀은 보여준다.

-   넥스트JS는 보통 리액트처럼 아래와 같은걸 지원하지 않는다. (바로 오류 뿜뿜)

```javascript
// index.js
import 'styles/globalFoo.css';
```

-   이러한 글로벌 CSS는 <App> 안에서만 쓰라고 강제한다.
-   다른 페이지에서 CSS를 먹이기 위해서는 아래와 같이 적용.

```javascript
// 모듈식
import './thisPage.module.css'; // 일반적인 css파일처럼 적되, 이름만 xxxx.module.css 로.

// <style> 태그 사용 (이 페이지에 대해서만)
<style jsx>{`
	a {
		color: white;
	}
`}</style>;

// <style> 태그 사용 (이 페이지에 대해서만)
<style jsx global>{`
	div {
		display: flex;
		flex-direction: row;
		margin: auto;
	}
	a {
		color: white;
	}
`}</style>;
```

### next.config.js

-   Next.js에서 커스텀 설정을 하기 위해서는 프로젝트 루트 디렉토리 내 next.config.js, 또는 next.config.mjs 파일을 만들 수 있다. next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈로써, Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않습니다.
    [넥스트JS 사이트 참조](https://nextjs.org/docs/api-reference/next.config.js/introduction)

### redirects

-   redirects을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있다. redirects을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있습니다.

```javascript
const nextConfig = {
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
};
```

-   redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수로, 아래와 같은 파라미터를 지닌다.
-   source: 들어오는 request 경로 패턴 (request 경로)
-   destination: 라우팅하려는 경로 (redirect할 경로)
-   permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용.
    [관련 참고](https://nextjs.org/docs/api-reference/next.config.js/redirects)

### Rewrites

-   Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있습니다
    Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
    [참고](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
