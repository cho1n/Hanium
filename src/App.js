import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
	const hi = <p>Hi</p>;
	const myFavorite = {
		food: <li>샐러드</li>,
		animal: <li>Dog</li>,
		hobby: <li>programming</li>
	};

	function tick() {
		const element = (
			<div>
				<h1>Hello world!</h1>
				<h2>It is {new Date().toLocaleDateString()}.</h2>
			</div>
		);
		ReactDOM.render(element, document.getElementById('root'));
	}

	setInterval(tick, 1000);
}

export default App;

// let : 변하는 변수
// const : 변하지 않는 변수
// 컴포넌트는 유저 인터페이스를 갖추기 위한 Html, css, 그리고 로직 구현을 위한 자바 스크립트의 집합체
// 리액트는 컴포넌트다.
// 선언적 접근요소 