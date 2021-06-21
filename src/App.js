import logo from './logo.svg';
import './App.css';
import RouterPage from './router/RouterPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouterPage></RouterPage>
      </header>
    </div>
  );
}

export default App;
