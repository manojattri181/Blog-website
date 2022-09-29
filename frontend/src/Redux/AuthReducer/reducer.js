import * as types from "./actionTypes";
import { getLocalData, saveLocalData } from "../../utils/localStorage";


const token = getLocalData("token");
const username = getLocalData("username");

const initialState = {
  isLoading: false,
  isError: false,
  token: token || "",
  user_name: username || ""
};

const reducer = (state = initialState, action) => {
  const {type,payload,username} = action;
  console.log(type,payload,username);
  switch(type){
    case types.lOGIN_REQUEST:
      return {
        ...state,
        isLoading:true,
      }
      case types.lOGIN_SUCCESS:
        saveLocalData("token",payload);
        saveLocalData("username",username);
        return {
          ...state,
          isLoading:false,
          token:payload,
          user_name:username
        }
        case types.lOGIN_FALIURE:
          return{
            ...state,
            isError:true,
          }
          default :
          return state;
        }
};

export { reducer };
