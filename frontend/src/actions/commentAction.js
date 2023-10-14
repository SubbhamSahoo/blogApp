import axios from "../axiosConfig"

export const addCommentAction = (body) => async () => {
        return new Promise(async(resolve,reject)=>{
            try {
                const {data} = await axios.post("/addComment",body)
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    }