import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {InView} from 'react-intersection-observer'
import CountUpTool from './tools/CountUpTool'
const CardSM = ({animation, imagesrc, description, number, uniqueID, imgDirection, className}) => {
    const [animateThisSection, setAnimateSection] = useState(false);
    const cueAnimation = (inView, animation) => {
        setAnimateSection(true);
        document.getElementById(uniqueID).classList.add('animate__animated',animation);
      }

  if (imgDirection == "left" ) 
  return (
    <InView className={className} as="div" onChange={(inView, entry) => {inView === true ? cueAnimation(inView, animation) : null}}>
        <div id = {uniqueID} className="flex flex-row items-center justify-around w-full py-4 h-auto border-2 border-et-teal bg-et-light-gray rounded-2xl">
            <Image src={imagesrc} width={90} height={100} layout="intrinsic"></Image>
            <div className="flex flex-col justify-left items-center w-1/2 h-full ">
                <h1 id={imagesrc} className="text-4xl font-bold tracking-wide w-full"><CountUpTool start={0} end={number} uniqueID={imagesrc} activated={animateThisSection}></CountUpTool></h1>
                <p className="text-sm mt-2 font-normal text-et-dark-gray w-full ">{description}</p>
            </div>
        </div>
    </InView>
  )
  else if (imgDirection == "right")
  return ( 
    <InView className={className} as="div" onChange={(inView, entry) => {inView === true ? cueAnimation(inView, animation) : null}}>
      <div id = {uniqueID} className="flex flex-row items-center justify-around w-full py-4 h-auto border-2 border-et-dark-gray bg-[#E4F8F0] rounded-2xl">        
            <div className="flex flex-col justify-left items-center w-1/2 h-full ">
            <h1 id={imagesrc} className="text-4xl font-bold tracking-wide w-full"><CountUpTool start={0} end={number} uniqueID={imagesrc} activated={animateThisSection}></CountUpTool></h1>
                <p className="text-sm mt-2 font-normal text-et-dark-gray w-full ">{description}</p>
            </div>
            <Image src={imagesrc} width={90} height={100} layout="intrinsic"></Image>
      </div>
    </InView>
  )
  else return <div>Invalid image direction</div>
}

export default CardSM