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
    <h4 className="center-align blue-text grey lighten-4">CURRICULUM VITAE (C.V)</h4>
  </div>



  <div className="row container"> 
{/* // Grid Coloumn-1/2 */}
                    <div className="col s12 m6">
                        <div className="card blue-grey lighten-1" style={{height:'200px'}}>
                        <div className="card-content white-text">
                        <span className="card-title"><b>My Objective</b>  </span>
                        <p>To make an immediate contribution to the organization to which I will be engaged; using my practical experience, by applying my knowledge, by using my high caliber and intellectual skills. <br/>
                    
                        </p>
                        </div>
                    </div>
</div>



{/* // Grid Coloumn-2/2 */}
<div className="col s12 m6">
<div className="card blue-grey lighten-1" style={{height:'200px'}}>
                        <div className="card-content white-text">
                        <span className="card-title"><b>Area of Interest</b></span>
                        <p>Finance and Accounts is my area of interest. I have more than 12-Years experience in this field.  <br/>
                        
                         </p>
                        </div>
                    </div>

 </div>

 

</div>

<div className='container'>
 <h5 className="center-align blue-text grey lighten-4">Components of My Curriculum Vitae (C.V)</h5>

<div className="row container">


{/* // Grid Coloumn-1/2 */}
<div className="col s12 m6">
<div className='center'><Link to='/Personal'><button className="waves-effect waves-light btn-large btn">Personal Info</button></Link> </div><br/>
<div className='center'><Link to='/Experience'><button className="waves-effect waves-light btn-large btn">Experience</button></Link> </div><br/>
<div className='center'><Link to='/Contact'><button className="waves-effect waves-light btn-large btn">Contact</button></Link> </div>
</div>



{/* // Grid Coloumn-2/2 */}
<div className="col s12 m6">
<div className='center'><Link to='/Education'><button className="waves-effect waves-light btn-large btn">Education</button></Link> </div><br/>
<div className='center'><Link to='/Itskills'><button className="waves-effect waves-light btn-large btn">I.T Skilss</button></Link> </div><br/>
<div className='center'><Link to='/Login'><button className="waves-effect waves-light btn-large btn">Login</button></Link> </div>
</div>


</div>

    <div>
    <div className="card blue-grey lighten-4">
     <div className="card-content black-text">
     <span className="card-title"><b>About Me</b>  </span>
     <p> My name is waqas saleem. I was born in Faisalabad. My father was a Govt. School teacher. He passed away in 2010. </p>
     </div>
     </div>
     </div>


</div>

                

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