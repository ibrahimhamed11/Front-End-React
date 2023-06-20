import React from "react";
import BlogImage from "../../images/blog-image/CA_pregnant_08182022istock.jpg";
import "./blogCard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlogById } from "../../Redux/Slices/BlogSlice";

function BlogCards(props) {
  const api = "http://localhost:4000/"
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blog } = props;
  function handleBlog(){
    dispatch(getBlogById(blog._id))
  }
 
  return (
    <div className="blog-info">
      <NavLink to="/blogDetails" onClick={handleBlog} className="blog_link">
        <img src={`${api}${blog.image}`} alt="Blog_Image" />
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </NavLink>
      <button className="btn btn-outline-primary" onClick={()=> {
        navigate("/blogDetails")
      }}>أقرا المزيد</button>
    </div>
  );
}

export default BlogCards;
