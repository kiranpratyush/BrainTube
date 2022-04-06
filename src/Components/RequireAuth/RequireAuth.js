import React from "react"
import { useAuth } from "../../Contexts/Auth.context"
import { Navigate } from "react-router-dom"


export function RequireAuth({children})
{
    const {state} = useAuth()
    if(!state.user)
    {
        return <Navigate to ="/auth/LogIn" replace ></Navigate>
    }
    else
    {
        return children
    }
}