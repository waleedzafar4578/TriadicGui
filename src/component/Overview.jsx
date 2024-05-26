import '../design/Overview.css'
import overViewContent from '../assets/overviewContent';
import { useState , useEffect} from 'react'
function Overview(){
    const [activeClass , setActiveClass] = useState('');
    useEffect(()=>{
        const sidebarLinks = document.querySelectorAll('a');
        document.addEventListener('click' , function(event){
           let clickedOnOptions = false;
           for (let i = 0; i < sidebarLinks.length; i++){
                if(event.target === sidebarLinks[i]){
                    clickedOnOptions = true;
                    break;
                }
           }
           if(clickedOnOptions === false){
            setActiveClass('')
           }
        })
    } , [])
    function handleActiveClass(identifier)
    {
        setActiveClass(identifier);
    }
    return(
        <div className="overviewContainer">
            <div className="toc-container">
                <ul className="tableOfContent">
                    <li><a className={activeClass === 'Introduction' ? 'active-class' : ''} onClick={() => handleActiveClass('Introduction')} href="#introduction">Introduction</a></li>
                    <li><a className={activeClass === 'Key Features' ? 'active-class' : ''} onClick={() => handleActiveClass('Key Features')} href="#key-features">Key Features</a></li>
                    <li><a className={activeClass === 'Benefits' ? 'active-class' : ''} onClick={() => handleActiveClass('Benefits')} href="#benefits">Benefits</a></li>
                    <li><a className={activeClass === 'User Guide' ? 'active-class' : ''} onClick={() => handleActiveClass('User Guide')} href="#user-guide">User Guide</a></li>
                    <li><a className={activeClass === 'Demo' ? 'active-class' : ''} onClick={() => handleActiveClass('Demo')} href="#demo">Demo</a></li>
                    <li><a className={activeClass === 'Special Thanks' ? 'active-class' : ''} onClick={() => handleActiveClass('Special Thanks')} href="#special-thanks">Special Thanks</a></li>
                </ul>
            </div>
            <div className="content">
                <section id="introduction">
                    <h2>Introduction</h2>
                    <p>{overViewContent.introduction.content}</p>
                </section>
                <section id="key-features">
                    <h2>Key Features</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="benefits">
                    <h2>Benefits</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="user-guide">
                    <h2>User Guide</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="demo">
                    <h2>Demo</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="special-thanks">
                    <h2>Special Thanks</h2>
                    <p>Introduction of the product</p>
                </section>
            </div>
            
        </div>
    )
}

export default Overview