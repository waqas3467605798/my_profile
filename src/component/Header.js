import React, {Component} from 'react'
import '../App.css'
import M from "materialize-css";
import waqasPic from '../images/Picture.jpg'

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
                            <img src={waqasPic} className='waqasPic  brand-logo' /> 
                            <a href="#" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-incons">menu</i>
                            </a>
                            
                            <ul className="right hide-on-med-and-down">
                                <li><a href="sass.html">Personal</a></li>
                                <li><a href="badges.html">Education</a></li>
                                <li><a href="collapsible.html">Experience</a></li>
                                <li><a href="collapsible.html">I.T Skills</a></li>
                                <li><a href="collapsible.html">Contact me</a></li>
                            </ul>
                            </div>
                        </nav>

                        <ul className="sidenav" id="mobile-links">

                                <li><a href="sass.html">Personal</a></li>
                                <li><a href="badges.html">Education</a></li>
                                <li><a href="collapsible.html">Experience</a></li>
                                <li><a href="collapsible.html">I.T skills</a></li>
                                <li><a href="collapsible.html">Contact me</a></li>

                        </ul>
                        


                </div>

        )


    }
}

export default Header;