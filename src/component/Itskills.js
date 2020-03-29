import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Itskills extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
                       
                    <div className='container grey lighten-4'>
                         <h4 className="center-align blue-text">Information Technology Skills</h4>
                     </div>
         
                             <div className="container"> 
                             <ul className="collection">
                             <li className="collection-item grey lighten-3"><b className='green-text'>WEB-SITE DEVELOPMENT</b><br/>Have skills to develop complete business website using the following Technologies<br/> 1- <b>HTML</b> (Hyper text Markup Language) <br/>2- <b>CSS</b> (Cascading Style Sheet) <br/>3- <b>Javascript</b> (Programming Language)  <br/> 4- <b>Firebase</b> (Data base platform) </li>
                             </ul>
                             </div>   
         
                             <div className="container"> 
                             <ul className="collection">
                             <li className="collection-item grey lighten-3"><b className='green-text'>COMPUTER SKILLS</b><br/>Have more than 10 years Experience of wokring on the followings;<br/> 1- <b>Microsoft Excel</b> <br/>2- <b>Microsoft Word</b> <br/>3- <b>Power Point</b> <br/> 4- <b>Oracle</b><br/> 5- <b>Internet Browsing</b><br/>6-<b> E-mails </b> </li>
                             </ul>
                             </div>
         
                             <div className='center'><Link to='/Contact'><button className="waves-effect waves-light btn-large">Contact Details</button></Link></div>
                          </div> 
            

        )


    }
}

export default Itskills;