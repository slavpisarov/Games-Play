import { useContext, useEffect } from "react";

import * as authService from '../../services/authService'
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate()
    const { logoutHandler} = useContext(AuthContext)
    useEffect(() =>{
        authService.logout()
        .then(() => {
            logoutHandler()
            navigate('/')
        })
    },[])
}