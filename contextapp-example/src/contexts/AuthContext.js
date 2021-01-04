import React, {Component,createContext} from 'react';

export const authContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated:false
     }
     toggleAuth = ()=>{
         this.setState({
            isAuthenticated:!this.state.isAuthenticated
         })
     }
    render() {
        return (
            <authContext.Provider value={{...this.state, toggleAuth :this.toggleAuth}} >
                {this.props.children}
            </authContext.Provider>
        );
    }
}

export default AuthContextProvider;