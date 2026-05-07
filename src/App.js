import React from 'react'
/*import { Switch, Route, Link} from 'react-router-dom';*/
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typogaphy, Space } from 'antd'
import { Navbar, Exchanges, Homepage, CryptoDetails, CryptoCurrencies, News } from './components'
import './App.css'


function App() {
  return (
  <div className='app'>
    <div className='navbar'>
       <Navbar />
    </div>
    <div className='main'>
      <Layout>
        <div className='routes'>
          <Routes>
            <Route exact path='/' element={<Homepage />}>
             
            </Route>
            <Route exact path='/exchanges' element={<Exchanges />}>
             
            </Route>
            <Route exact path='/cryptocurrencies' element={<CryptoCurrencies/>}>
               
            </Route>
            <Route exact path='/crypto/:coinId' element={ <CryptoDetails />}>
              
            </Route>
            <Route exact path='/news' element={<News />}>
               
            </Route>
          </Routes>
        </div>
      </Layout>
    </div>
    <div className='navbar'>
      
    </div>
  </div>
  )
};

export default App;