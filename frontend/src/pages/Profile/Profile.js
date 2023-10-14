import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Status from "../../components/Status";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBlogsByUserIdAction } from "../../actions/blogAction";
import * as timeago from 'timeago.js';

const UserProfile = () => {
  const dispatch = useDispatch()
  const [userBlogs,setUserBlogs] = useState([])

  const fetchUserBlogsById = async () => {
    const data = await dispatch(fetchBlogsByUserIdAction())
    console.log((data));
    setUserBlogs(data.blogs)
  }

  useEffect(()=>{
    fetchUserBlogsById()
  },[])
  return (
    <>
      <Topbar />
      <div className="m-auto max-width-1 my-2">
        <Status fetchUserBlogsById={fetchUserBlogsById}/>
          {
            userBlogs?.map((blog)=>(
              <div className="home-article" key={blog._id}>
                <div className="home-article-img">
                  <img src="img/3.png" alt="article" />
                </div>
                <div className="home-article-content font1">
                  <NavLink to={`/blogpost/${blog._id}`}>
                    <h3>{blog.title}</h3>
                  </NavLink>
  
                  <div>Author Name : {blog?.user?.fullName}</div>
                  <span>{timeago.format(blog.createdAt)}</span>
                </div>
              </div>
            ))
          }
      </div>
    </>
  );
};

export default UserProfile;
