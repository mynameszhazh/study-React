import logo from './logo.svg';
import './App.css';
// import ClassComponent from './pages/classComponent';
// import { FunctionComponent } from './pages/FnCom';
import HomePage from './homePage/HomePage';
import ReacRedux from './reactRedux/ReactRdux';
import ReacRedux2 from './reactRedux/ReactRdux2';
import ReactRdux3 from './reactRedux/ReactRdux3';
import RouterPage from './routerPage/RouterPage';
import HookPage from './HookPage/HookPage';
// import store from './stote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <ClassComponent/>
        <FunctionComponent /> */}
        {/* <HomePage></HomePage> */}
        <ReacRedux></ReacRedux>
        {/* <ReacRedux2></ReacRedux2> */}
        {/* <ReactRdux3></ReactRdux3> */}
        {/* <RouterPage></RouterPage> */}
        {/* <HookPage></HookPage> */}
      </header>
    </div>
  );
}

export default App;
