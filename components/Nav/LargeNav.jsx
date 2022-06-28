import React, {useState} from 'react'
import {InView} from 'react-intersection-observer'
import LinkDropdown from './LinkDropdown';
import Image from 'next/image';
function LargeNav() {
  
    const [largeHeaderIsSticky, setLargeHeaderIsSticky] = useState(false);
    const determineStickyNess = (size) => {
        if (largeHeaderIsSticky && size == 'lg')
            return "nav-transition w-[100vw] z-20 px-6 flex justify-center items-center fixed bg-stone-800"; //w-[1225px] px-6 flex justify-between items-center
        else if (size == 'lg')
            return "nav-transition w-full justify-center items-center";
    }

    const turnSticky = (isInView, size) => {
        if (size == "lg")
        {
            if (isInView && largeHeaderIsSticky == true)
                setLargeHeaderIsSticky(false);
            else if (!isInView && largeHeaderIsSticky == false)
                setLargeHeaderIsSticky(true);   
        }
    }

    return (
        <div id="lg-nav" className="hidden xl:flex justify-center items-center w-full absolute">
            <div className="w-[1225px] h-[96px] flex lg:flex-col items-center">
                <InView as="div" onChange={(inView) => {turnSticky(inView ,'lg')}} className="w-full flex lg:flex-col items-center px-4">
                    <div id="header-top" className="w-full flex pt-2 justify-between">
                        <div id="header-top-left" className="flex justify-center items-center text-white text-SM space-x-4">
                            <div>FACEBOOK</div>
                            <div>TWITTER</div>
                            <div>LINKEDIN</div>
                        </div>
                        <div className="flex space-x-4 text-white">
                            <div>106 SW 6th Street, Gainesville, Florida</div>
                            <div>collaborate@emergingtech.co</div>
                        </div>
                    </div>
                    <hr className="text-white bg-white w-[1192px] mt-2 mb-4"></hr>
                </InView>
                
                    <div id="sm-nav" className={determineStickyNess('lg')}>
                        <div id="sm-nav-inner" className="w-[1225px] px-6 flex justify-between items-center">
                            <div className="w-[140px]">
                                <Image src="/ETPNGWhite.webp" width="120px" height="60px" layout="responsive"></Image>
                            </div>
                            <div className="w-auto h-auto flex space-x-6">
                                <div className="nav-link text-white text-sm">HOME</div>
                                <div className="nav-link group text-white text-sm">
                                    CENTERS OF EXCELLENCE
                                    <LinkDropdown></LinkDropdown>
                                </div>
                                <div className="nav-link text-white text-sm">ABOUT US</div>
                                <div className="nav-link text-white text-sm">CAREERS</div>
                            </div>
                            <div className="text-sm et-button secondary">CONTACT US</div>
                        </div>
                    </div>

            </div>
        </div>
  )
}

export default LargeNav