import * as types from "./actionTypes";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch(type){
      case types.GET_BLOG_REQUEST:
        return {
          ...state,
          isLoading:true,
        }
        case types.GET_BLOG_SUCCESS:
          return {
            ...state,
            isLoading:false,
            blogs:payload
          }
          case types.GET_BLOG_FAILURE:
            return{
              ...state,
              isError:true
            }
            default :
            return state;
          }
};

export { reducer };
