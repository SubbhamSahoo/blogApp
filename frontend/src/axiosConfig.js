import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:8000/api/v1",
    headers:{
        'Content-Type':'application/json',
    }
})
instance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(token){
            config.headers.authorization = token
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default instance