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

                    
 <div className='container grey lighten-4'>
    <h4 className="center-align blue-text">PERSONAL INFORMATION</h4>
  </div>


<div className="row container"> 
{/* // Grid Coloumn-1/2 */}
<div className="col s12 m6">
<ul className="collection">
      <li className="collection-item grey lighten-2"><p> <b>Name</b> <br/>WAQAS SALEEM</p></li>     {/*ok*/}
      <li className="collection-item grey lighten-3"><p> <b>Nationality</b> <br/>PAKISTAN</p></li>  {/*ok*/}
      <li className="collection-item grey lighten-2"><p> <b>C.N.I.C Number</b> <br/>31303-6611734-5</p></li>  {/*ok*/}
      <li className="collection-item grey lighten-3"><p> <b>Contact Number</b> <br/>+923467605798<br/>+923167558180</p></li> {/*ok*/}
      <li className="collection-item grey lighten-2"><p> <b>Marital Status</b> <br/>MARRIED</p></li>  {/*ok*/}

      
      </ul>
</div>



{/* // Grid Coloumn-1/2 */}
<div className="col s12 m6">
    <ul className="collection">
      <li className="collection-item grey lighten-3"><p> <b>Father Name</b> <br/>MUHAMMAD SALEEM</p></li>  {/*ok*/}
      <li className="collection-item grey lighten-2"><p> <b>Domicile</b> <br/>PUNJAB, FAISALABAD</p></li>  {/*ok*/}
      <li className="collection-item grey lighten-3"><p> <b>Date of Birth</b> <br/> 04-JUNE-1986</p></li>  {/*ok*/}
      <li className="collection-item grey lighten-2"><p> <b>E-mail</b> <br/>waqas.mba86@gmail.com <br/>waqas_mba86@yahoo.com</p></li>
      <li className="collection-item grey lighten-3"><p> <b>Religion</b> <br/>ISLAM</p></li>  {/*ok*/}
      
</ul>

 </div>

</div>

<div className='container'>
<ul className="collection container">
<li className="collection-item grey lighten-2"><p> <b>Address</b> <br/>Street No.7, P-4671/6, Near Qadri Marriage Hall, 66-foota bazar, Mansoorabad, Faisalabad, Pakistan.</p></li>
</ul>
</div>



  <div className='center'><Link to='/Education'><button className="waves-effect waves-light btn-large">My Education Info</button></Link></div>
            
            </div>
        )


    }
}

export default Personal;