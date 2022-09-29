import axios from "axios";
import * as types from "./actionTypes";


export const GetData = ()=>(dispatch)=>{
    dispatch({type:types.GET_BLOG_REQUEST});
  return  axios.get("https://thawing-ravine-68761.herokuapp.com/blog/").then((res) => {
        dispatch({type:types.GET_BLOG_SUCCESS,payload:res.data.data});
    }).catch = ((er) => {
        console.log(er)
    })
}