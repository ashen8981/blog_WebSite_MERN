import './singlepost.css'
import SIMG from '../../images/singlepost.jpg'
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function Singlepost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("/posts/"+path);
      console.log(res)
    };
    getPost();
  },[path]);

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img src={SIMG} alt=""  className='singlePostImg'/>
          <h1 className="singlePostTitle">
          Trees And Mountain in Alta, UT, United States 
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Ashen</b></span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>A photo of trees and mountains in Alta, Utah would depict a magnificent scene of natural splendor. 
            The majestic peaks of the Wasatch Mountains, capped with snow and shrouded in mist, would form a breathtaking backdrop to the dense forest of evergreens in the foreground. 
            The vibrant green of the trees would stand in sharp contrast to the icy blue and white of the mountain peaks, creating a mesmerizing visual spectacle. The serenity of the scene would be palpable, and the viewer would be transported to a world of pristine beauty, untouched by the chaos of modern life. 
            This photo is a testament to the awe-inspiring power of nature, and a reminder of the need to preserve and protect it for future generations.
          </p>
        </div>
      </div>
  )
}
