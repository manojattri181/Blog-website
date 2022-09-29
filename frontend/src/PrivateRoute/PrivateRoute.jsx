import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {token} = useSelector((store)=>{
    return {
      token: store.AuthReducer.token
    }
  })
  console.log(token);

  if(token){
    return children;
  }else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute