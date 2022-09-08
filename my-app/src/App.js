import logo from './logo.svg';
import Layout from './components/Layout'
import store from './store/index'
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
                  <h1>{store.getState()}</h1>
                </div>  
              ),
              txt: msg,
              btnClick: () => {
                console.log('btnClick')
                store.dispatch({type: 'INCREMENT'})
              }
            }
          }
        </Layout>
      </header>
    </div>
  );
}

export default App;
