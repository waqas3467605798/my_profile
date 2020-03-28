import '../App.css'
import React, { Component, createContext } from 'react';

const myContext = createContext();

export const MyLoginProvider = myContext.Provider;
export const MyLoginConsumer = myContext.Consumer;

class LoginContextStore extends Component {
constructor(){
    super()
    this.state = {
        
    }
}


l

    render() {        
        return (
            <div>
            <MyLoginProvider value={{...this.state}}>
                {this.props.children}
            </MyLoginProvider>

            
            </div>
        )


    }
}

export default LoginContextStore;