import React, {Component} from 'react'
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

export default Content;