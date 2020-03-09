import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import HomeContent from './component/HomeContent'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Personal from './component/Personal'
import Education from './component/Education'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Itskills from './component/Itskills'


class App extends Component {
  
  render() {    
    return (


<div>
<Header/>
<HomeContent/>
<Footer/>
</div>

    )
  }
}




export default App;
