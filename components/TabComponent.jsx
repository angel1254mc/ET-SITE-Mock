import React, {useState, useEffect, useMemo } from 'react'
import TabContent from './TabContent.jsx'

let previousContent = ""

const TabComponent = (
    {
      Tabs = []
    }
  ) => {
    const [tabIndexClicked, setTabIndexClicked] = useState(0);
    const currentContent = Tabs[tabIndexClicked].content
    const handleTabClick = (index) => {
      setTabIndexClicked(index);
      previousContent = currentContent;
      /**Some sort of animation logic */
    }

  return (
    <div className="w-full flex flex-col mt-8">
      <div className="tab-headers w-full flex items-left space-x-4 text-black font-2xl font-bold">
        {
          Tabs.map((tab, index) => {
            return (index === tabIndexClicked ? (<button className="tab-button selected" type="button" onClick={() => {handleTabClick(index)}} id={`tabtitle-${index}`} key = {index}>{tab.title}</button>)
            : <button className="tab-button" type="button" onClick={() => {handleTabClick(index)}} id={`tabtitle-${index}`} key = {index}>{tab.title}</button>
            )
          })
        }
      </div>
      <div key={currentContent}>
        <TabContent content={currentContent} previousContent={previousContent}></TabContent>
      </div>
    </div>
  )
}

export default TabComponent