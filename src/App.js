import logo from './logo.svg';
import './App.css';
import ContextPage from './pages/ContextPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContextPage></ContextPage>
      </header>
    </div>
  );
}

export default App;
