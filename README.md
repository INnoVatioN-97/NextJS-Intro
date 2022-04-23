# NextJS Introduction

### "What the fuck is difference between Framework vs Library?"

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
