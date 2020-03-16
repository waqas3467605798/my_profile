import React, {Component} from 'react'
import '../App.css'



class Contact extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
            <div className='container grey lighten-4'>
                <h4 className="center-align blue-text">Contact Details</h4>
            </div>

                     <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Mobile Numbers</b>  </span>
                        <p> +923467605798 <br/>+923167558180</p>
                        </div>
                    </div>
                    </div>


                    <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>E-Mails</b>  </span>
                        <p> waqas.mba86@gmail.com <br/>waqas_mba86@yahoo.com</p>
                        </div>
                    </div>
                    </div>


                    <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Office</b>  </span>
                        <p> Ph: 041-8757081-90 Ext. 108 <br/>Address: Head Office, Kashmir Road, Nishatabad, Faisalabad, Pakistan</p>
                        </div>
                    </div>
                    </div>



            </div>

        )


    }
}

export default Contact;