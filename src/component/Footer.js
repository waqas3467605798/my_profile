import React, {Component} from 'react'
import '../App.css'



class Footer extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            
                <footer className="page-footer">
                <div className="footer-copyright container">
                    <div className="container center white-text" style={{fontSize:'10px'}}>
                    Prepared by : Waqas Saleem  <br/> waqas.mba86@gmail.com <br/> +923467605798
                 {/*   <span class="grey-text text-lighten-4 right" href="#!">E-mail: waqas.mba86@gmail.com Mobile: 0346-7605798</span>*/}
                    </div>
                </div>
                </footer>
                        
        )


    }
}

export default Footer;