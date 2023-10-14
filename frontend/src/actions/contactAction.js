import axios from "../axiosConfig"

export const contactUsAction = (body) => async(dispatch) => {
    return new Promise(async(resolve,reject)=>{
        try {
            dispatch({type:"START_LOADER"})
            const {data} = await axios.post("/contact",body)
            dispatch({type:"HIDE_LOADER"})
            resolve(data)
        } catch (error) {
            reject(error)
            dispatch({type:"HIDE_LOADER"})
        }
    })
}