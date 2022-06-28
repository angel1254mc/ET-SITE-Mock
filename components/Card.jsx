import React from 'react'
import Image from 'next/image'
export default function Card({content, title, image}) {
  return (
    <div className="w-[80vw] lg:w-[60vw] h-[80%] px-4 bg-et-light-gray text-white flex flex-col items-center justify-center rounded-2xl shadow-xl shadow-et-dark-gray">
        <div className="w-full h-[50%] p-14"><Image width={250} height={250} layout="intrinsic" src={image}></Image></div>
        <div className="w-full h-[40%] flex flex-col">
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
