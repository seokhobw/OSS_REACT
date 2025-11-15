// App.js
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    alert("React 로고는 계속 돌아갑니다!");
  };

  return (
    <div className="App">

      {/* 1. 제목 추가 */}
      <h1 className="main-title">My First React Project</h1>

      {/* React 기본 로고 유지 */}
      <img src={logo} className="App-logo" alt="logo" />

      {/* 2. 설명 텍스트 추가 */}
      <p className="description">
        This page keeps the original React spinning logo while applying custom styles!
      </p>

      {/* 3. 버튼 추가 */}
      <button className="custom-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;