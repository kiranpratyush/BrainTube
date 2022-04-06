import React from "react"
import { auth } from "./FireBase"
import { signOut } from "firebase/auth"
import { useAuth } from "../Contexts/Auth.context"


function signOutFireBase()
{
    return signOut(auth)
} 


export {signOutFireBase}