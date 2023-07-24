import React from 'react';
import ReactDOM  from 'react-dom/client';
import './App.css'
import './index.css'

import {Header, Article,Feature, Navbar,Footer} from './components';





 const App = ()=> {
    return <div className='App'>
        <div className='app__banner'>
            <Navbar/>
            <Header/>
        </div>
        <Feature/>
        <Article/>
        <Footer/>
     </div>
 }


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)