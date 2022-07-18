import React, {useState} from 'react'
import {InView} from 'react-intersection-observer'
import Image from 'next/image';
import NavLinkMobile from './NavLinkMobile';
import {headerData} from '../../src/data.js'

function MobileNav() {
    const [smallHeaderIsSticky, setSmallHeaderIsSticky] = useState(false);
    const [sideNavActive, setSideNavActive] = useState(false);

    const turnSticky = (isInView, size) => {
        if (size == "sm")
        {
            if (isInView && smallHeaderIsSticky)
                setSmallHeaderIsSticky(false);
            else if (!isInView && !smallHeaderIsSticky)
                setSmallHeaderIsSticky(true);
        }
    }
    
    const handleSideNav = () => {
        if (sideNavActive)
            return "left-[20vw] sm:left-[40vw] md:left-[60vw] shadow-6 ";
        else if (!sideNavActive)
            return "left-full transition-all ";
    }

    const handleSideNavOverlay = () =>  {
        if (sideNavActive)
            return "right-0 opacity-less"
        else if (!sideNavActive)
            return "right-full bg-black"
    }

    const determineStickyNess = (size) => {
        if (smallHeaderIsSticky && size == 'sm')
            return "nav-transition xl:hidden fixed w-[100vw] z-20 px-8 py-2 flex justify-between items-center  bg-stone-800"
        else if (size == 'sm')
            return "nav-transition xl:hidden fixed w-[100vw] z-20 px-8 py-2 flex justify-between items-center"
    }
  
  
  
    return (
        <div id="sm-nav-wrapper w-[100vw] absolute xl:hidden">
        <InView as="div" onChange={(inView) => {turnSticky(inView, 'sm')}} className="w-full flex lg:flex-col items-center px-4">
            <div id="scroll-detector-div h-[10px]"></div>
        </InView>
        <div id="sm-nav" className={determineStickyNess('sm')}>
            <div className="w-[150px] md:w-[220px]">
                <Image src="/ETPNGWhite.webp" width="150px" height="80px" layout="responsive"></Image>
            </div>
            <div className="w-[20px] md:w-[40px]">
                <button className="w-full h-full" onClick={() => {setSideNavActive(true)}} type="button">
                    <Image src="/burger.png" width="20px" height="20px" layout="responsive"></Image>
                </button>
            </div>
        </div>
        <div id="sm-sidebar-overlay" className={"sidebar-overlay-transition z-[20] xl:hidden w-[100vw] bg-transparent fixed h-[100vh] " + handleSideNavOverlay()} onClick={() => {setSideNavActive(false)}}></div>
        <div id="sm-sidebar" className={"sidebar-transition dropdown-wrapper xl:hidden fixed flex flex-col w-[80vw] sm:w-[60vw] md:w-[40vw] h-[100vh] z-30 bg-white text-black " + handleSideNav()}>
            {headerData.map((el, index) => {
                return <NavLinkMobile key={index} className="text-md" props={el}></NavLinkMobile>
            })}
        </div>
    </div>
  )
}

export default MobileNav