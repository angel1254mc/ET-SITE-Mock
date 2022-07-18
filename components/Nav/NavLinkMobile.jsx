import React, {useState} from 'react'

function NavLinkMobile({props = {}, className}) {
    const [toggle, toggleDropdown] = useState(false);

    const handleDropdown = () => {
        if (toggle)
            return " bg-et-light-gray h-0"
        else
            return " left-[-100%] h-[350px] bg-et-light-gray"
    }
    const name = props.name ? props.name : "default";
    const href = props.href ? props.href : "/";
    const hasDropdown = props.dropdown && props.dropdown.length > 0 ? true : false;
    const dropdownElements = hasDropdown ? props.dropdown : [];
  return (
    <div id="link-wrapper">
        <div className={" transition-colors border-b-2 px-6 py-3 w-full flex hover:text-blue-400 " + className} onClick= {() => {toggleDropdown(!toggle)}}>{props.name}</div>
        {hasDropdown ? 
            <div className={"transition dropdown-wrapper overflow-y-hidden" + handleDropdown()}>
                {dropdownElements.map((el, index) => {
                    return <NavLinkMobile key={index} className="text-et-dark-gray" props={el}></NavLinkMobile>
                })} 
            </div> 
            : <></>}
    </div>
  )
}

export default NavLinkMobile