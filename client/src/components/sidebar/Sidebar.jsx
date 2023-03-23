import "./sidebar.css"
import ME from "../../images/ME.jpg"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{ 
    const getCats = async ()=>
    {
      const res = await axios.get("/categories");
      setCats(res.data)
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src={ME} alt="" />
          <p> A third-year IT diplomat at the Institute of Technology, University of Moratuwa (NDT).
              I’m looking to collaborate on full-stack development.
              I’m currently learning some frameworks and languages.
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
                      // <li className="sidebarListItem">{c.name}</li>
            // <Link to ={`/?cat=${c.name}`} className="link"> 
            <Link to ={`/?cat=${c.name}`} className="link" key={c._id}>   {/* changed by meee */}
              <li key={c._id} className="sidebarListItem">{c.name}</li> {/* changed by meee */}
            </Link> 
          ))}
        </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i> 
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}
