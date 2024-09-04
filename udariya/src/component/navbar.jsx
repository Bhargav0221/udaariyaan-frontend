import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuitem } from './menuitem';
import { Component } from 'react';
import"./navbar.css"



function navbar() {
  const [clicked,setClicked]=useState(false);
  const handleClick=()=>{
    setClicked(!clicked);
  };
  
  return (
    <div className='flex  justify-between items-center shadow-md rounded-[13px]'>
      <h1 className='font-bold text-3xl'> UDARIYA</h1>
      <div  className="menu-icon "onClick={handleClick}>
      <i className={clicked?"fas fa-times":"fas fa-bars "} ></i>
      
      </div>
     <ul className={clicked?"nav-menu active":"nav-menu "}>
 
        {
          menuitem.map((menu)=>{
            return(
              <li >
             <Link className={menu.cname} to={menu.url}>
           <i class={menu.icon}></i>
            {menu.title}
          </Link>
          </li>
            );
          })
        }
       
        
    
      <button>Signup</button>
     
    


      
     </ul>
     
    </div>
  )
}

export default navbar;
