import {createAction, createAsyncThunck} from "@reduxjs/toolkit"
import axios from "axios"

const setUser = createAction("setUser", (datos)=>{
    return {
        payload: datos,
    }
})

const login = createAsyncThunck("login", async({email,password})=> {
    const credentials = {
        email: email,
        password: password
    }
    const response = await axios.post("htt://localhost:8080/mytinerary/auth/signIn",credentials)
    localStorage.setItem("token",response.data.token)
    return response.data
})

export {login,setUser}


// en app

const loginWithToken = async (token) => {
    try {
        const response = await axios.get("api/myTinerary/users/validateToken",
            {
                Headers:{
                    Authorization: "Bearer ${token}"
                },
            }
        )
        return response.data.response
    } catch (error) {
        console.log("error", error);
        
    }
}



const dispatch = useDispatch()
let token = localStorage.getItem("token")
if (token) {
    loginWithToken(token).then((user)=>{
        dispatch(setUser({user,token}))
    })
}


