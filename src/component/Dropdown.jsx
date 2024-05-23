import { useState } from 'react';
import '../design/Dropdown.css';
const Dropdown = ({options , handleSelect , buttonName}) =>{
    const [isOpen , setIsOpen] = useState(false);
    function toggleDropdown()
    {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }
    function handleSelectOption(option)
    {
        handleSelect(option);
        setIsOpen(false);
    }
    return(
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {buttonName}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option , index) => (
                        <li key={index} className='dropdown-item' onClick={()=>{handleSelectOption(option)}}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown