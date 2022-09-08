// import logo from './logo.svg';
// import Layout from './components/Layout'
// import store from './store/index'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  // let msg = 'page home'
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          {/* <Layout showTopNav={true} showBottomBar={true} title='app' >
            {
              {
                content: (
                  <div>
                    <h1>{store.getState()}</h1>
                  </div>
                ),
                txt: msg,
                btnClick: () => {
                  console.log('btnClick')
                  store.dispatch({ type: 'INCREMENT' })
                }
              }
            }
          </Layout> */}
          <Link to='/foo'>foo</Link>
          <Link to='/bar'>bar</Link>
          <Routes>
            <Route path="/foo" element={<Foo />} />
            <Route path="/bar" element={<Bar />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

function Foo() {
  return (
    <h2>foo</h2>
  )
}

function Bar() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    document.title = '点击了' + count + '次数' 
  })
  
  return (
    <div>
      <h2>Bar{count}</h2>
      <button onClick={() => setcount(count+1)}>add</button> 
    </div>
  )
}
export default App;
