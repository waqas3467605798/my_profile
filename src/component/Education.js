import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class Education extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
 <div className='container'>
    <h4 className="center-align blue-text">EDUCATION</h4>
 </div>
                <div className='container'>
               <div className="row">
                    
                    {/* Grid Coloumn-1/2  */}
                    <div className="col s6"> 
                    <ul className="collection">
                    <li href="#!" className="collection-item"><b>Master of Business Administration (MBA)</b><br/>Allama Iqbal Open University<br/>Specialization : Banking and Finance <br/>Division : 1st <br/>Passing Year : 2009 <br/> <Link to='/Education/mba'>Marks Detail- MBA</Link><br/></li>
                    <li href="#!" className="collection-item"><b>Beachlor of Commerce (B.com)</b><br/>University of the Punjab <br/>Division : 2nd <br/>Passing Year : 2006 <br/> <Link to='/Education/bcom'>Marks Detail- B.com</Link></li>
                    <li href="#!" className="collection-item"><b>Intermediate</b><br/>B.I.S.E Faisalabad <br/>Division : 2nd <br/>Passing Year : 2004 <br/>Main Subject: Mathematics, Statistics <br/> <Link to='/Education/fa'>Marks Detail- Intermediate</Link></li>
                    <li href="#!" className="collection-item"><b>Matriculation with Science</b><br/>B.I.S.E Faisalabad <br/>Division : 2nd <br/>Passing Year : 2002 <br/> <Link to='/Education/matric'>Marks Detail- Matriculation</Link></li>
                    </ul>
                    </div>    
                    
                    
                     {/* //Grid Coloumn-2/2 */}

                    <div className="col s6">  
                    <ul className="collection">
                    <h6 className="green-text">MARKS DETAILS</h6>
                   <Route path='/Education/mba' component={Mba} />
                   <Route path='/Education/bcom' component={Bcom} />
                   <Route path='/Education/fa' component={Fa} />
                   <Route path='/Education/matric' component={Matric} />
                   </ul>
                     </div>
                    
            </div>
            </div>
            <div className='center'><Link to='/Experience'><button className="waves-effect waves-light btn-large">Experience</button></Link></div>
            </div>

        )


    }
}


class Mba extends Component {
    render(){
        return(
            <div>
                <p style={{color:'green'}}>MBA-Banking and Finance</p>
               <table className='table'>
                   <tr>
                       <td>Total Marks</td> <td>2000</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>1206</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>60%</td>
                   </tr>
               </table>

               <p style={{color:'green'}}>Main Subjects</p>

               <table className='table'>
               <tr>
                       <td>Financial Accounting</td>
                </tr>
                <tr>
                       <td>Cost  Accounting</td>
                </tr>
                <tr>
                       <td>Financial Management</td>
                </tr>
                <tr>
                       <td>Taxation</td>
                </tr>
                <tr>
                       <td>Banking Law In Pakistan</td>
                </tr>
                </table>
            </div>
        )
    }
}



class Bcom extends Component {
    render(){
        return(
            <div>
               <p style={{color:'blue'}}>B.com </p>
               <table className='table'>
                   <tr>
                       <td>Total Marks</td> <td>1500</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>890</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>59.33%</td>
                   </tr>
               </table>

               <p style={{color:'blue'}}>Main Subjects</p>

               <table className='table'>
               <tr>
                       <td>Financial Accounting</td>
                </tr>
                <tr>
                       <td>Cost Accounting</td>
                </tr>
                <tr>
                       <td>Income Tax</td>
                </tr>
                <tr>
                       <td>Sales Tax</td>
                </tr>
                <tr>
                       <td>Auditing</td>
                </tr>
                </table>
            </div>
        )
    }
}


class Fa extends Component {
    render(){
        return(
            <div>
                 <p style={{color:'blue'}}>Intermediate </p>
               <table className='table'>
                   <tr>
                       <td>Total Marks</td> <td>1100</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>588</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>53.45%</td>
                   </tr>
               </table>

               <p style={{color:'blue'}}>Main Subjects</p>

               <table className='table'>
               <tr>
                       <td>Mathematics</td>
                </tr>
                <tr>
                       <td>Statistics</td>
                </tr>
                <tr>
                       <td>English</td>
                </tr>
                
                </table>
            </div>
        )
    }
}




class Matric extends Component {
    render(){
        return(
            <div>
                MATRIC
            </div>
        )
    }
}







export default Education;









{/* // Grid Coloumn-1/2 
                    <div className="col s4"> 
                    <Link to='/mba'>Marks Detail- MBA</Link> <br/> <br/>
                    <Link to='/bcom'>Marks Detail- B.com</Link> <br/>  <br/>
                    <Link to='/fa'>Marks Detail- Intermediate</Link> <br/> <br/>
                    <Link to='/matric'>Marks Detail- Matriculation</Link> <br/> <br/>
                    </div>     */}