import React, {Component} from 'react'
import '../App.css'


class Employee extends Component {
constructor(){
    super()
    this.state = {
        color: ['green', 'red', 'white', 'BLACK','white', 'light green', 'arooj', 'iqra', 'eman', 'uswa', 'anabia'],
        brands: ['car','bike','rakshaw','land cruiser','yamaha']
    }
}

    render() {
        return (
                <div>
                    <h2>Colors list</h2>
                    <ul style={{listStyleType: 'none'}}>
                    {this.state.color.map(   (item,index)=>{
                        return <li key={index}> <table> <tr><td>Color Name</td> <td>{item}</td> <td><button onClick={ ()=>{
                            let newColors = this.state.color.filter( (clr,i)=>{
                                return item !== clr
                                
                            } )
                            this.setState({color: newColors})
                            console.log(item)
                        } }>Delete</button> </td> </tr> </table>  </li>
                    }  )   }

<hr/>

{this.state.brands.map(   (item,index)=>{
                        return <li key={index}> Brand Name: {item} <button onClick={ ()=>{
                            let newColors = this.state.brands.filter( (clr,i)=>{
                                return item !== clr
                            } )
                            this.setState({brands: newColors})
                        } }>Delete</button> </li>
                    }  )   }


                    </ul>
                </div>

        )


    }
}

export default Employee;