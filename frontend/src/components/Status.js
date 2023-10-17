import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlogAction } from "../actions/blogAction";

const Status = ({fetchUserBlogsById}) => {
  const [blog, setBlog] = useState({
    title:"",
    blog:""
  })
  const [errors,setErrors] = useState({})
  const dispatch = useDispatch()

  const validateForm = () => {
    let isValid = true;
    const validationErrors = {}

    if(!blog.title){
      validationErrors.title = 'Title is required'
      isValid = false
    }

    if(!blog.blog){
      validationErrors.blog = 'Please add your blog'
      isValid = false
    }

    setErrors(validationErrors)
    return isValid
  }

  const shareBlog = async(e) => {
    e.preventDefault()
    if(validateForm()){
      const data = await dispatch(createBlogAction(blog))
      setBlog({
        title:"",
        blog:""
      })
      alert(data.message)
      fetchUserBlogsById()
    }
  }
 
  return (
    <>
      <div className="status_bar">
        <div className="status_wrapper">
          <input className="form-control mb-2" placeholder="Enter blog title" type="text" name="title" value={blog.title} onChange={(e)=>setBlog({...blog,[e.target.name]:e.target.value})}/>
          {errors.title && <span className="danger">{errors?.title}</span>}
          <div className="status_top">
            <textarea
              rows={10}
              cols={10}
              placeholder={`What's on your mind  ?`}
              name="blog"
              value={blog.blog}
              onChange={(e)=>setBlog({...blog,[e.target.name]:e.target.value})}
              className="status_input"
            />
          </div>
             {errors?.blog && <span className="danger">{errors?.blog}</span>}
          <hr className="hr_line" />
          <div className="status_bottom">
            <button type="submit" onClick={shareBlog} className="share_btn">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
