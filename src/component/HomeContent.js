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
<div className='container'>
    <h4 className="center-align blue-text">CURRICULUM VITAE (C.V)</h4>
  </div>



  <div className="row container"> 
{/* // Grid Coloumn-1/2 */}
<div className="col s12 m6">
<div className="card blue-grey darken-1" style={{height:'200px'}}>
                        <div className="card-content white-text">
                        <span className="card-title"><b>My Objective</b>  </span>
                        <p>Hi, My name is Waqas Saleem. My Goal is to achive the organizational targets. <br/>
                    
                        </p>
                        </div>
                    </div>
</div>



{/* // Grid Coloumn-1/2 */}
<div className="col s12 m6">
<div className="card blue-grey darken-1" style={{height:'200px'}}>
                        <div className="card-content white-text">
                        <span className="card-title"><b>Area of Interest</b></span>
                        <p>Finance & Accounts is my area of interest. I have more than 12-Years experience in this field.  <br/>
                        
                         </p>
                        </div>
                    </div>

 </div>

</div>
              

                <div className='center'><Link to='/Personal'><button className="waves-effect waves-light btn-large">My personal Information</button></Link> </div>

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