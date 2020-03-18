import React, {Component} from 'react'
import '../App.css'
import M from "materialize-css";
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'


class Login extends Component {
constructor(props){
    super(props)
    this.state = {
        user: null
    }
}


componentDidMount(){
    
}




    render() {        
        return (
<div className='container'>
    <br/><br/>
<Link to='/Login/loginform'><button className="waves-effect btn-large">Login</button></Link>
<Link to='/Login/register'><button className="waves-effect btn-large">Register</button></Link>
<Route path='/Login/register' component={Register} />
<Route path='/Login/loginform' component={Loginform} />
</div>

        )
    }
}

export default Login;






// Register Form Component
class Register extends Component{

    render(){
        return (
<div>

            <div className="row">
            <div className="col s12">
             
             <div className="input-field">
             <input placeholder="First Name" id="firstName" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Second Name" id="secondName" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Email" id="email" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Set Password" id="password" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <button className="waves-effect btn-large">Submit</button>
             </div>
             </div>

</div>
        )
    }
}








// LoginForm Component

class Loginform extends Component{

    render(){
        return (
            <div>

            <div className="row">
            <div className="col s12">
             
             
             
              <div className="input-field">
             <input placeholder="Email" id="email" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Password" id="password" type="text" class="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <button className="waves-effect btn-large">Submit</button>
             </div>
             </div>

            </div>
        )
    }
}