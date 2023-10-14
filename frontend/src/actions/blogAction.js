import axios from '../axiosConfig';

export const fetchAllBlogsAction = () => async (dispatch) => {
    try {
        dispatch({type:"BLOGS_FETCH_REQUEST"})
        const {data} = await axios.get("/getAllBlogPost")
        if(data){
            dispatch({type:"BLOGS_FETCH_SUCCESS",payload:data.blogs})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:"BLOGS_FETCH_FAIL",error:error.message})
    }
}

export const fetchBlogsByUserIdAction = () => async () => {
    return new Promise(async(resolve,reject)=>{
        try {
            const {data} = await axios.get("/getAllBlogsById")
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

export const createBlogAction = (body) => async () => {
        return new Promise(async(resolve,reject)=>{
            try {
                const {data} = await axios.post("/createBlog",body)
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
}

export const getBlogByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({type:"BLOG_FETCHBYID_REQUEST"})
        const {data} = await axios.get(`/getBlogById/${id}`)
        if(data){
            console.log(data);
            dispatch({type:"BLOG_FETCHBYID_SUCCESS",payload:data[0]})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:"BLOG_FETCHBYID_FAIL",error:error.message})
    }
}