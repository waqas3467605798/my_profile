import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Footer extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
          

                


<div>
              <div class="row">
                    <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Hi, My Name is Waqas Saleem</span>
                        <p>This is my Personal profile page. Can say that this page is my Curriculam Vita The purpose of this page to introduce myself as education wise, Experience and my other skills. Please Click on the above menue bar to visit myself catagorically. <br/>
                        Following are the Main Points of my C.V (this page)
                        <ol>
                            <li>My Personal Information</li>
                            <li>My Academic Education</li>
                            <li>My Professional Experience</li>
                            <li>My Information Technologies (I.T) Skills</li>
                            <li>My Contact Details</li>

                        </ol>
                        
                         </p>
                        </div>
                    </div>
                    </div>
                </div>

                <Link to='/Personal'><button className="waves-effect waves-light btn-large">Go to My personal Info</button></Link>

</div>
        )


    }
}

export default Footer;





/*  The below code is for firebase cloud store */

/*import React, {Component} from 'react'
import {db} from '../config/Firebase'

class Content extends Component {

    constructor(props){
        super(props)
        this.state = {
                  
        }
      }

     

handleStore = () => {

    const fname= this.refs.fname.value
    const lname= this.refs.lname.value
    const age= this.refs.age.value
    const address= this.refs.address.value
    
    db.collection("userlist").add({
     Name: fname,
     LName: lname,
     Age: age,
     Adress: address

  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
     
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  }); 

 
  }





    render() {
        return (
            <div>
                <input type='text'  ref='fname' placeholder='First Name'/><br/>
                <input type='text'  ref='lname' placeholder='Second Name'/><br/>
                <input type='text'  ref='age' placeholder='Age'/><br/>
                <input type='text'  ref='address' placeholder='Address'/><br/>
                <button onClick={this.handleStore}>Save</button>
        
        <p>Name: {this.state.fname}</p>
        <p>Seconde Name: {this.state.lname}</p>
        <p>Age: {this.state.age}</p>
        <p>Address: {this.state.address}</p>
                
            </div>
        )


    }
}

export default Content; */