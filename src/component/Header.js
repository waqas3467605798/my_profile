import React, {Component} from 'react'
import '../App.css'
import M from "materialize-css";
import waqasPic from '../images/Picture.jpg'
import {Link} from 'react-router-dom'
// import {MyLoginConsumer , MyLoginProvider} from '../context/LoginContext'



class Header extends Component {
constructor(){
    super()
    this.state = {
        name:'waqas'
    }
}


componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
}

    render() {        
        return (
            <div>



                      <nav className="nav-wrapper" style={{height:'85px'}}>
                            <div className="container">
                            <img src={waqasPic} className='waqasPic  brand-logo' alt='pic here'/> 
                            <a  href="#" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-incons">menu</i>
                            </a>
                            
                            <ul className="right hide-on-med-and-down">
                                <li><Link to='/Home'>Home</Link></li>
                                <li><Link to='/Personal'>Personal</Link></li>
                                <li><Link to='/Education'>Education</Link></li>
                                <li><Link to='/Experience'>Experience</Link></li>
                                <li><Link to='/Itskills'>I.T Skills</Link></li>
                                <li><Link to='/Contact'>Contact</Link></li>
                                <li><Link to='/Login'> Login</Link></li>
                                 
                            </ul>
                            </div>
                        </nav>



                        <ul className="sidenav" id="mobile-links">
                                 <li><Link to='/Home'>Home</Link></li>
                                <li><Link to='/Personal'>Personal</Link></li>
                                <li><Link to='/Education'>Education</Link></li>
                                <li><Link to='/Experience'>Experience</Link></li>
                                <li><Link to='/Itskills'>I.T Skills</Link></li>
                                <li><Link to='/Contact'>Contact me</Link></li>
                                <li><Link to='/Login'> Login</Link></li>
                            
                        </ul>
                        


                </div>

        )


    }
}

export default Header;