import logo from './logo.svg';
import './App.css';
import HocPage from './pages/HocPage';
import FormPage from './pages/FormPage';
import FormPage2 from './pages/FormPage2';
import MyFormPage from './pages/MyFormPage';
import My2FormPage from './pages/My2FormPage';
import DialogPage from './pages/DialogPage';
// import store from './stote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <HocPage></HocPage> */}
        {/* <FormPage></FormPage> */}
        {/* <FormPage2></FormPage2> */}
        <MyFormPage></MyFormPage>
        {/* <My2FormPage></My2FormPage> */}
        {/* <DialogPage></DialogPage> */}
      </header>
    </div>
  );
}

export default App;
