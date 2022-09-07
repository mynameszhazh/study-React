import logo from './logo.svg';
import Layout from './components/Layout'
import './App.css';

function App() { 
  let msg = 'page home'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Layout showTopNav={true} showBottomBar={true} title='app'>
          {
            {
              content:(
                <div>
                  <h1>123</h1>
                </div>  
              ),
              txt: msg,
              btnClick: () => {
                console.log('btnClick')
              }
            }
          }
        </Layout>
      </header>
    </div>
  );
}

export default App;
