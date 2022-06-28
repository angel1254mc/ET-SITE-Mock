import React, {useState, useEffect} from 'react'
import { CountUp } from 'countup.js';
export default function CountUpTool({
    activated, //Conditional to start countdown
    start,
    end,
    uniqueID,
}) {
    let countUp;
    useEffect(() => {
        if (activated)
        {
            countUp = new CountUp(uniqueID, end, {startVal: start})
            if (!countUp.error) {
              countUp.start();
            } else {
              console.error(countUp.error);
            }
        }
    }, [activated])


  return (
    <div id={uniqueID}></div>
  )
}
