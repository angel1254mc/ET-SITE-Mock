import React, {useEffect} from 'react'

const TabContent = ({content, previousContent}) => {
  useEffect(() => {
    document.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeOutFirst') {
            e.target.classList.add('not-visible') 
        }
    })
  },[content])
  return (
    <div key={content} className=" w-full text-left p-4 text-et-dark-gray tracking-tight font-xl mt-2 bg-et-secondary">
        <p className="relative fade-out-first sm:text-xl lg:text-xl z-0">{previousContent}</p>
        <p className="relative fade-in-second sm:text-xl lg:text-xl z-10">{content}</p>
    </div>
  )
}

export default TabContent