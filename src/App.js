// App.js
import './App.css';

function App() {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <div className="App">
      <h1 className="main-title">Welcome to My First React Project!</h1>

      <p className="description">
        This is a 이석호's customized React page. 아래에서 변경된 스타일을 확인해보세요!
      </p>

      <button className="custom-button" onClick={handleClick}>
        클릭해보세요
      </button>
    </div>
  );
}

export default App;