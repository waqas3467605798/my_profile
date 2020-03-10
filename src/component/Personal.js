import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Personal extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>

<ul class="collection center container">
      <li className="collection-item center"><p> <b>Name</b> <br/>WAQAS SALEEM</p></li>
      <li className="collection-item center"><p> <b>Father Name</b> <br/>MUHAMMAD SALEEM</p></li>
      <li className="collection-item center"><p> <b>Nationality</b> <br/>Pakistan</p></li>
      <li className="collection-item center"><p> <b>C.N.I.C Number</b> <br/>31303-6611734-5</p></li>
      <li className="collection-item center"><p> <b>Domicile</b> <br/>Punjab, Faisalabad</p></li>
      <li className="collection-item center"><p> <b>E-mail</b> <br/>waqas.mba86@gmail.com <br/>waqas_mba86@yahoo.com</p></li>
      <li className="collection-item center"><p> <b>Contact Number</b> <br/>+923467605798<br/>+923167558180</p></li>
      <li className="collection-item center"><p> <b>Address</b> <br/>Street No.7, P-4671/6, Near Qadri Marriage Hall, 66-foota bazar, Mansoorabad, Faisalabad, Pakistan.</p></li>
</ul>


  <div className='center'><Link to='/Education'><button className="waves-effect waves-light btn-large">My Education Info</button></Link></div>
            </div>

        )


    }
}

export default Personal;