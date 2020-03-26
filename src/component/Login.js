import React, {Component} from 'react'
import '../App.css'
import fire from '../config/Firebase'
import {MyLoginConsumer} from '../context/LoginContext'
import {MyLoginProvider} from '../context/LoginContext'


class Login extends Component {
constructor(props){
    super(props)
    this.state = {
        user: null,
    }
}


componentDidMount(){
this.authListener();

}


authListener = ()=>{
fire.auth().onAuthStateChanged( (user)=>{
    if(user){
        this.setState({user, isLogin:true})
    } else {
        this.setState({user:null})
    }
})
}

    render() {        
        return (
<div className='container'>
    {this.state.user ? (<DisplayLoginPage/>) : <LoginRegisterForms/>}

            
</div>

        )
    }
}

export default Login;








class LoginRegisterForms extends Component{
    constructor(props){
        super(props)
        this.state = {
            displayLoginForm: false,
            displayRegisterForm: true
        }
    }
    
    // this function will run when you click on Login button
    displayLoginForm = ()=>{
    this.setState({displayLoginForm: true, displayRegisterForm: false})
    }
    
    
    // this function will run when you click on Register button
    displayRegisterForm = ()=>{
        this.setState({displayLoginForm: false, displayRegisterForm: true})
    }

    render(){
        return(
            <div>
            <p>If you have already Registered, Plz Login. If you not Registered already, plz Click on Register first.</p>
        <button className="waves-effect btn-large" onClick={this.displayLoginForm}>Login </button>
        <button className="waves-effect btn-large" onClick={this.displayRegisterForm}>Registeration</button>
    
                {/* LoginForm Div*/}
                <div className={this.state.displayLoginForm===true ? '' : 'display'}>
                <Loginform/>            
                </div>
                
                {/* RegisterForm Div*/}
                <div className={this.state.displayRegisterForm===true ? '' : 'display'}>
                <Register/>
                </div>
    
        </div>
        )
    }
}







// Register Form Component
class Register extends Component{
constructor(props){
    super(props)
    this.state = {
    
    }
}



signup = ()=>{
const email = document.querySelector('#email2').value;
const password = document.querySelector('#password2').value;
const conpassword = document.querySelector('#conpassword').value;

if(password === conpassword){

fire.auth().createUserWithEmailAndPassword(email, password)
.then( (u)=>{
    console.log(u);
    
} )
.catch( (err)=>{
    alert('error' + 'this email is already registered, please click on login')
} )

} else {
        alert("Your entered password is not match")
        }

}



    render(){
        return (
<div>

            <div className="row">
            <div className="col s12">
             
             

              

              <div className="input-field">
             <input placeholder="Email" id="email2" type="text" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Set Password" id="password2" type="password" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Confirm Password" id="conpassword" type="password" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <button className="waves-effect btn-large" onClick={this.signup}>Submit</button>
             </div>
             </div>

</div>
        )
    }
}








// LoginForm Component

class Loginform extends Component{



   signin = ()=>{
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    fire.auth().signInWithEmailAndPassword(email, password)
    .then( (u)=>{
        console.log(u.user.email);
    } )
    .catch( (err)=>{
        console.log('error')
    } )
   } 


    render(){
        return (
            <div>

            <div className="row">
            <div className="col s12">
             
             
             
              <div className="input-field">
             <input placeholder="Email" id="email" type="text" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Password" id="password" type="password" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <button className="waves-effect btn-large" onClick={this.signin}>Submit</button>
             </div>
             </div>

            </div>
        )
    }
}



class DisplayLoginPage extends Component{


logout = ()=>{
fire.auth().signOut();
}
    render(){
        return (
            <div>
                <h2>Welcome...</h2>
                <h4>Are you like this profile and want to make your own profile like this....</h4>
                <h4>Please Contact:</h4>
                <p>+923467605798</p>
                <p>+923167558180</p>
                <p>waqas.mba86@gmail.com</p>
                <p>waqas_mba86@yahoo.com</p>
                
                <button className="waves-effect btn-large" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}