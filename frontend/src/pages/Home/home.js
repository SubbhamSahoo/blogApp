import React, { useEffect } from "react";
import Topbar from "../../components/Topbar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogsAction } from "../../actions/blogAction";
import * as timeago from 'timeago.js';

const Home = () => {
  const {blogs} = useSelector(state=>state.blogs)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllBlogsAction())
  },[])

  return (
    <>
      <Topbar />
      <div className="m-auto content max-width-1 my-2">
        <div className="content-left">
          <h1>The heaven for bloggers</h1>
          <p>
            iBlog is a website which lets you submit an article which upon
            approval will be up on our website and you can get a good amount of
            reach from here!
          </p>
          <p>
            My Halloween decorations are staying in the box this year. To be
            honest, they didn’t make it out of the box last year either. My
            Halloween spirit has officially been bludgeoned to death by
            teenagers who no longer care and a persistent October fear of the
            Northern California wildfires. And speaking of fear, isn’t there
            more than enough of that going around? Maybe all of us can pretend
            that Halloween isn’t even happening this year?
          </p>
        </div>
        <div className="content-right">
          <img src="img/home.svg" alt="iBlog" />
        </div>
      </div>

      <div className="max-width-1 m-auto">
        <hr />
      </div>
      <div className="home-articles max-width-1 m-auto font2">
        <h2>Featured Articles</h2>
        {
          blogs?.map((blog)=>(
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
            )
          )
        }
      </div>
    </>
  );
};

export default Home;
