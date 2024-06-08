import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext=React.createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState();
    const navigate= useNavigate();

    const saveUser =(newUser)=>{
        setUser(newUser);
        navigate('/');
    }
    const getMe =()=>{
        return user;
    }
    const auth={saveUser,getMe};
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () =>{
    const auth=useContext(AuthContext);
    return auth;
}


export {AuthProvider,useAuth};
