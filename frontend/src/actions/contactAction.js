import axios from "../axiosConfig"

export const contactUsAction = (body) => async() => {
    return new Promise(async(resolve,reject)=>{
        try {
            const {data} = await axios.post("/contact",body)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}