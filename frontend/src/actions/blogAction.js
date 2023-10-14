import axios from '../axiosConfig';

export const fetchAllBlogsAction = () => async (dispatch) => {
    try {
        dispatch({type:"START_LOADER"})
        dispatch({type:"BLOGS_FETCH_REQUEST"})
        const {data} = await axios.get("/getAllBlogPost")
        if(data){
            dispatch({type:"BLOGS_FETCH_SUCCESS",payload:data.blogs})
        }
        dispatch({type:"HIDE_LOADER"})
    } catch (error) {
        console.log(error)
        dispatch({type:"BLOGS_FETCH_FAIL",error:error.message})
        dispatch({type:"HIDE_LOADER"})
    }
}

export const fetchBlogsByUserIdAction = () => async (dispatch) => {
    return new Promise(async(resolve,reject)=>{
        try {
            dispatch({type:"START_LOADER"})
            const {data} = await axios.get("/getAllBlogsById")
            dispatch({type:"HIDE_LOADER"})
            resolve(data)
        } catch (error) {
            reject(error)
            dispatch({type:"HIDE_LOADER"})
        }
    })
}

export const createBlogAction = (body) => async (dispatch) => {
        return new Promise(async(resolve,reject)=>{
            try {
                dispatch({type:"START_LOADER"})
                const {data} = await axios.post("/createBlog",body)
                dispatch({type:"HIDE_LOADER"})
                resolve(data)
            } catch (error) {
                reject(error)
                dispatch({type:"HIDE_LOADER"})
            }
        })
}

export const getBlogByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({type:"START_LOADER"})
        dispatch({type:"BLOG_FETCHBYID_REQUEST"})
        const {data} = await axios.get(`/getBlogById/${id}`)
        if(data){
            console.log(data);
            dispatch({type:"BLOG_FETCHBYID_SUCCESS",payload:data[0]})
        }
        dispatch({type:"HIDE_LOADER"})
    } catch (error) {
        console.log(error)
        dispatch({type:"BLOG_FETCHBYID_FAIL",error:error.message})
        dispatch({type:"HIDE_LOADER"})
    }
}