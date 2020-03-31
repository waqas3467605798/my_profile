import React, {Component} from 'react'
import '../App.css'
import firebase from '../config/Firebase'
import {db} from '../config/Firebase'
// import {MyLoginConsumer} from '../context/LoginContext'
// import {MyLoginProvider} from '../context/LoginContext'



class Login extends Component {
constructor(props){
    super(props)
    this.state = {
        user: null,
        userName:''
    }
}


componentDidMount(){
this.authListener();

}


authListener = ()=>{
firebase.auth().onAuthStateChanged( (user)=>{
    if(user){
        this.setState({user})
        console.log(user.email)


        // this is only to get user Name & sent this name through props to the LoginDisplay page
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
    
                if(doc.data().useremail === user.email){
                    // console.log(doc.data())
                    const current_user = doc.data().userame;
                    this.setState({userName:current_user})
                }
                
            });
        });




    } else {
        this.setState({user:null})
    }
})
}

    render() {        
        return (
<div className='container'>
    {this.state.user ? (<DisplayLoginPage current_user={this.state.userName}/>) : <LoginRegisterForms/>}
           
            
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
                 <h5 className="center-align blue-text grey lighten-4">Want to Make Your Own Profile....? Plz Register</h5>
            <p className='grey lighten-2 center red-text'><b>If you have already Registered, Plz Login. If you not Registered already, plz Click on Register first.</b></p>
        <button className="waves-effect btn-large" onClick={this.displayLoginForm}>Login </button> <span style={{color:'white'}}>...</span>
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
const name = document.querySelector('#name').value;
const email = document.querySelector('#email2').value;
const password = document.querySelector('#password2').value;
const conpassword = document.querySelector('#conpassword').value;

if(password === conpassword){

    // localStorage.setItem("currentUser",name);

 
firebase.auth().createUserWithEmailAndPassword(email, password)
.then( (u)=>{
    // console.log(u);

    db.collection("users").add({
        userame: name,
        useremail: email,
        userpassword: password,
        
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        
    });     


} )
.catch( (err)=>{
    alert('error: this email is already registered, please click on login')
} )



} else {
        alert("Your entered password is not match with confirm password")
        }

}



    render(){
        return (
<div>

            <div className="row">
            <div className="col s12">
             
             
            <div className="input-field">
             <input placeholder="Your Name" id="name" type="text" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              

              <div className="input-field">
             <input placeholder="Email" id="email2" type="text" className="validate" />
             {/* <label forhtml="first_name">First Name</label> */}
              </div>

              <div className="input-field">
             <input placeholder="Create Password" id="password2" type="password" className="validate" />
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
    



    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (u)=>{

        // console.log(u.user.uid)
        // console.log(u)
        
    } )
    .catch( (err)=>{
        alert('Your Password is incorrect or you are not registered.')
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

    constructor(props){
        super(props)
        this.state = {
        // current_us: localStorage.getItem("currentUser"),
        feedback: ''
        }
      }

     

logout = ()=>{
firebase.auth().signOut();
}


changeHandler =(e)=>{
this.setState({[e.target.name]: e.target.value})
}


feedback = ()=>{
    // const feedback = document.querySelector("#feedback").value
    const feedback = this.state.feedback;
    const userName = this.props.current_user
    // const userName = localStorage.getItem("currentUser")
    // console.log(feedback);


    db.collection("userFeedback").add({
        userName: userName,
        feedback: feedback
        
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert('Your feedback submitted successfully')
        this.setState({feedback:''})
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });     



}

    render(){
        return (
            <div>
                <br/>
                <h4 className='container'>Welcome...<span className='blue-text'>{this.props.current_user} </span></h4>
                <br/><h5 className='red-text container'>Are you like my Profile and want to make your own Profile like this... Please Contact </h5>


                  <div className='container'>
                        <div className="card blue-grey lighten-5">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Contact Details</b>  </span>
                        <p> +923467605798 <br/>+923167558180 <br/> waqas.mba86@gmail.com <br/> waqas_mba86@yahoo.com</p>
                        </div>
                    </div>
                    </div>
            
                    <div style={{border:'1px solid grey'}} className='container'>
                    <h5 className='red-text container'>Write Your Feedback Here </h5>
                    <div className='container'>
                        
                        <input value={this.state.feedback} name='feedback' onChange={this.changeHandler} type='text' id='feedback' />
                        <button className="waves-effect btn-large" onClick={this.feedback}>Submit</button>
                        </div>
                    </div>
<br/><br/>

              <div className='container center'>
                <button className="waves-effect btn-large red" onClick={this.logout}>Logout</button>
                </div>
            <br/><br/>
            </div>
        )
    }
}