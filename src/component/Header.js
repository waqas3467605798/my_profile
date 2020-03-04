import React, {Component} from 'react'
import '../App.css'
import M from "materialize-css";

class Header extends Component {
constructor(){
    super()
    this.state = {
        name:'waqas'
    }
}

    render() {

this.componentDidMount = ()=>{
    M.AutoInit();
}

        return (
            <div>
                      <nav>
                            <div class="nav-wrapper">
                            <a href="#" class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">JavaScript</a></li>
                            </ul>
                            </div>
                        </nav>
                                    
                </div>

        )


    }
}

export default Header;