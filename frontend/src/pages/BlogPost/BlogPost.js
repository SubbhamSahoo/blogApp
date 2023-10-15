import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { getBlogByIdAction } from "../../actions/blogAction";
import { Avatar } from "@mui/material";
import { addCommentAction } from "../../actions/commentAction";
import SimpleBackdrop from "../../components/Backdrop";

const Blogpost = () => {
    const id = useParams().id
    const blogData = useSelector(state=>state.blogData)
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")

    const fetchBlogDetails = () => {
        dispatch(getBlogByIdAction(id))
    }

    useEffect(()=>{
        fetchBlogDetails()
    },[id])

    const addCommentToPost = async () => {
        await dispatch(addCommentAction({comment,blogId:id}))
        setComment("")
        fetchBlogDetails()

    }
    
    return(
        <>
        <Topbar />
        <SimpleBackdrop />
        <div className="m-auto blogpostContent max-width-1 my-2">
            <div className="blogpostContent-left">
            <h1>{blogData?.blogs?.blog.title}</h1>
            <p>
               {blogData?.blogs?.blog?.blog}
            </p>
            </div>
        </div>
        <div className="max-width-1 m-auto">
            <hr />
        </div>
        <div className="home-articles max-width-1 m-auto font2">
            <h2>Comments</h2>
            <div className="form-outline flex-fill mb-0">
                <input
                    type="text"
                    name="comment"
                    className="form-control"
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                />
                <button type="submit" disabled={!comment} onClick={addCommentToPost} className="btn btn-primary btn-sm my-2">
                    Add Comment
                </button>
            </div>
            {
                blogData?.blogs?.commentedUser[0]?.comment && blogData?.blogs?.commentedUser.map((comment)=>(
                    <>
                    <div className="home-article-content font1 d-flex align-items-center ">
                    <Avatar>{comment.fullName[0]}</Avatar>
                    <div className="mx-3">{comment.comment}</div>
                    </div>
                    </>
                ))
            }
        </div>
        </>
    )
}

export default Blogpost