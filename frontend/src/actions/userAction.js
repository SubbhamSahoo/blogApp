import axios from '../axiosConfig';

export const userRegisterAction = (body) => async (dispatch) => {
    try {
        dispatch({type:"USER_REGISTER_REQUEST"})
        const {data} = await axios.post("/registerUser",body)
        if(data){
            dispatch({type:"USER_REGISTER_SUCCESS",payload:data})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:"USER_REGISTER_FAIL",error:error.message})
    }
}

export const userLoginAction = (body,navigate) => async(dispatch) => {
    try{
        dispatch({type:"USER_LOGIN_REQUEST"})
        const {data} = await axios.post("/login",body)
        localStorage.setItem('token',JSON.stringify(data?.token))
        if(data.token){
            dispatch({type:"USER_LOGIN_SUCCESS",payload:data})
            navigate("/")
        }
    }catch(err){
        console.log(err)
        dispatch({type:"USER_LOGIN_FAIL",error:err.message})
    }
}

export const userLogoutAction = () => (dispatch) => {
    dispatch({type:"USER_LOGOUT"})
    localStorage.removeItem("token")
}