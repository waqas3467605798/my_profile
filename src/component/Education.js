import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Education extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
               <h3 style={{textAlign:'center'}}>Education </h3>

               <div class="row">
                    
                    {/* // Grid Coloumn-1/2 */}
                    <div class="col s2"> 
                    <Link to='/mba'>Marks Detail- MBA</Link> <br/>
                    <Link to='/bcom'>Marks Detail- B.com</Link> <br/>
                    <Link to='/fa'>Marks Detail- Intermediate</Link> <br/>
                    <Link to='/matric'>Marks Detail- Matriculation</Link> <br/>
                    </div>
                    
                    
                     {/* //Grid Coloumn-2/2 */}
                    <div class="col s10">  
                    
                    <div class="collection">
                    <a href="#!" class="collection-item">Alvin</a>
                    <a href="#!" class="collection-item">Alvin</a>
                    
                     </div>
                    
                     </div>
                    
            </div>


            </div>

        )


    }
}

export default Education;