import  { useEffect,  useState } from "react";
import "./style.css";

const navItems = ["home", "settings", "lock" ];

export const Navbar = () =>  {
    const [activeIndex, setActiveIndex] = 
          useState(0);

    const handleScroll = () =>  {
        const  { 
            pageY0ffset,
            innerHeight
        } = window;

        const currentIndex = Math.floor(pageY0ffset / (innerHeight - 200));

        if (currentIndex !== activeIndex)  { 
              setActiveIndex(currentIndex)
     } 
 };