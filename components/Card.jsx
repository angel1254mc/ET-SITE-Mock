import React from 'react'
import Image from 'next/image'
export default function Card({content, title, image}) {
  return (
    <div className="w-[80vw] lg:w-[60vw] h-4/5 px-4 bg-et-light-gray text-white flex flex-col items-center justify-center rounded-2xl shadow-xl shadow-et-dark-gray">
        <div className="w-2/5">
            <div className="w-full h-full"><Image width={150} height={150} layout="responsive" src={image}></Image></div>
        </div>
        <div className="w-full h-3/6 flex flex-col">
            <div className="text-2xl py-2 text-black font-bold">
                {title}
            </div>
            <div className="text-et-dark-gray text-md h-[50%]">
                {content}
            </div>
            <div className="flex justify-center items-center h-full">
                <button className="et-button primary h-[50px] w-[50%] text-sm">READ MORE</button>
            </div>
        </div>
    </div>
  )
}
