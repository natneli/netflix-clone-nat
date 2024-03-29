import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
        } else{
          setShow(false);
        }

    });
    return () => {
      window.removeEventListener("scroll");
    };
    }, [])



  
  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix-Logo"
      />
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix-Logo"
      />
    </div>
  );
}

export default Nav;