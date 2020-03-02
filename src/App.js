import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './component/Student'
import './App.css'
import Employee from './component/Employee'
//import Employee from './component/Employee'



class App extends Component {
  
  render() {    
    return (


<div>
 <Student/>
 <hr/>
<Employee/>
</div>

    )
  }
}




export default App;
