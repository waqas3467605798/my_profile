import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import HomeContent from './component/HomeContent'
import './App.css'
import {BrowserRouter , Route} from 'react-router-dom'
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

<BrowserRouter>
<div>
<Header/>

<Route exact path='/' component={HomeContent}/>
<Route path='/Home' component={HomeContent}/>
<Route path='/Personal' component={Personal}/>
<Route path='/Education' component={Education}/>
<Route path='/Experience' component={Experience}/>
<Route path='/Itskills' component={Itskills}/>
<Route path='/Contact' component={Contact}/>

<Footer/>
</div>
</BrowserRouter>
    )
  }
}




export default App;
