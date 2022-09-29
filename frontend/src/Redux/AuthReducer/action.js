import axios from "axios";
import * as types from "./actionTypes";

export const GetSignupData = (payload) =>(dispatch)=>{
    return  axios.post("https://thawing-ravine-68761.herokuapp.com/user/signup",payload).then((res) => {
        console.log(res);
    }).catch = ((er) => {
        alert("error while signup") 
    })
}

export const GetLoginData = (payload) =>(dispatch)=>{
    dispatch({type:types.lOGIN_REQUEST});
    return  axios.post("https://thawing-ravine-68761.herokuapp.com/user/login",payload).then((res) => {
        console.log(res);
        dispatch({type:types.lOGIN_SUCCESS,payload:res.data.data.token,username:res.data.data.user_name});
    }).catch = ((er) => {
        dispatch({type:types.lOGIN_FALIURE});
        
    })
}
