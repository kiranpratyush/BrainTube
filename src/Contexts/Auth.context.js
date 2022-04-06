import React, { useContext ,useReducer,useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase/FireBase";
import { signOutFireBase } from "../FireBase/SignOutFireBase";

const AuthContext = React.createContext()


function reducerfn(previousState,action)
{
    switch(action.type)
    {
        case "LOG_IN":
            console.log(action.user)
            return {...previousState,user:action.user}
        case "LOG_OUT":
            return {...previousState,user:null}
        case "SIGN_OUT":
            const newState = {...previousState}
            signOutFireBase()
            .then(()=>newState.user=null)
            .catch(err=>console.log(err))
            return newState

        default:
            return previousState

    }
}

export function AuthProvider({children})
{
    const [state,dispatch] = useReducer(reducerfn,{user:null})
    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(auth,(user)=>user?dispatch({type:"LOG_IN",user}):dispatch({type:"LOG_OUT"}))
        return unsubscribe
    }
    ,[])

    return (
        <AuthContext.Provider value ={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth()
{
    return useContext(AuthContext)
}