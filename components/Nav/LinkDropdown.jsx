import React from 'react'
import { Link } from '@mui/material'
function LinkDropdown() {
  return (
    <div id={"dropdown-wrapper"} className="fixed w-auto z-10 pt-6 invisible group-hover:visible hover:visible group-hover:animate-fade-in">
        <div className=" w-[200px] bg-white flex flex-col pl-2 pr-2 shadow-md">
            
            <h1 className="py-2 text-sm text-et-dark-gray">
              <Link className="link" href="/innovation">
               
                  Innovation
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
              <Link className="link" href="/mobile">
                
                  Mobile
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
            <Link className="link" href="/healthcare">
               
                  Healthcare
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
            <Link className="link" href="/testing">
               
                  Testing
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
              <Link className="link" href="/cybersecurity">
               
                  Cybersecurity
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
            <Link className="link" href="/systems">
               
                  Systems of Systems Engineering
                
              </Link>
            </h1>
            <h1 className="py-2 text-sm text-et-dark-gray">
            <Link className="link" href="/business">
               
                  Business
                
              </Link>
            </h1>
        </div>
    </div>
  )
}

export default LinkDropdown