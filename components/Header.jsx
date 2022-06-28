import React, { useState } from 'react'
import Image from 'next/image'
import {InView} from 'react-intersection-observer'
import LinkDropdown from './Nav/LinkDropdown'
import LargeNav from './Nav/LargeNav'
import MobileNav from './Nav/MobileNav'
function Header() {
    

    
  
    return (
    <div id="nav-wrapper w-[100vw] overflow-x-hidden">
        <MobileNav></MobileNav>
        <LargeNav></LargeNav>
        
    </div>
  )
}

export default Header