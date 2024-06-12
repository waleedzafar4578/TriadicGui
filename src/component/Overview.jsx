import '../design/Overview.css'
import overViewContent from '../assets/overviewContent';
import TriadicLogo from './Logo';
// import { useState , useEffect , useRef} from 'react'
function Overview(){
    // const [activeClass , setActiveClass] = useState('');
    // const [sidebarOffset , setSideBarOffset] = useState(0);
    // const sidebarRef = useRef();
    // useEffect(()=>{
    //     const element = sidebarRef.current;
    //     const resizeObserver = new ResizeObserver((entries) =>{
    //         const {left = 0 , right = 0} = entries[0]?.contentRect??{}
    //         return setSideBarOffset(left + right);
            
    //     })
    //     resizeObserver.observe(element);
    //     return () => resizeObserver.unobserve(element);
    // },[sidebarRef])
    // useEffect(() => {
    //     if(sidebarOffset.current)
            
    // }, [])
    // useEffect(()=>{
        
    //     const sidebar = document.querySelector('.tableOfContent');
    //     const resizer = document.querySelector('.resizer');
    //     const content = document.querySelector('.content');
    //     function resizerFunction(resizer , sidebar , content){
    //         var xCordinates , sidebarWidth , contentWidth;
    //         function mouseDownHandler(event){
    //             xCordinates = event.clientX;
    //             var sbWidth = window.getComputedStyle(sidebar).width;
    //             var cWidth = window.getComputedStyle(content).width;
    //             contentWidth = parseFloat(cWidth);
    //             sidebarWidth = parseFloat(sbWidth);
    //             document.addEventListener("mousemove" , handleMouseMove);
    //             document.addEventListener("mouseup" , handleMouseUp);
    //         }
    //         function handleMouseMove(event)
    //         {
    //             let difference = event.clientX - xCordinates;
    //             let currentSidebarWidth = sidebarWidth + difference;
    //             let currentContentWidth = contentWidth - difference;
    //             console.log("Current Side Bar Width: " , currentSidebarWidth);
    //             console.log("Current Content Width: " , currentContentWidth);
    //             if(200 < currentSidebarWidth && currentSidebarWidth < 500){
    //                 sidebar.style.width = `${currentSidebarWidth}px`;
    //                 content.style.marginLeft = `${difference}px`;
    //             }
    //         }
    //         function handleMouseUp()
    //         {
    //             document.removeEventListener("mousemove" , handleMouseMove);
    //             document.removeEventListener("mouseup" , handleMouseUp);
    //         }
    //         resizer.addEventListener("mousedown" , mouseDownHandler)
    //      }
    //      resizerFunction(resizer , sidebar , content);
    // },[])
    // useEffect(()=>{
    //     function convertVwIntoPixels(valueInVw)
    //     {
    //         const viewPort = window.innerWidth;
    //         const oneVwinPixels = viewPort / 100;
    //         return valueInVw * oneVwinPixels; 
    //     }
    //     var resizer = document.querySelector('.resizer'),
    //         sidebar = document.querySelector('.toc-container');
    //     function resizerFunction(resizer , sidebar){
    //         //X-Coordinates of Mouse and Width of Sidebar
    //         var xCordinates , sidebarWidth;

    //         //When The Mouse Is Clicked
    //         function mouseDownHandler(event){
    //             //When The Mouse Is CLicked Get Its X-COordinates
    //             xCordinates = event.clientX;
    //             //Getting The Width Of Sidebar And COnverting It Into Integer
    //             var sbwidth = window.getComputedStyle(sidebar).width;
    //             sidebarWidth = parseInt(sbwidth , 10);

    //             //When The Mouse Move Use This Function
    //             document.addEventListener("mousemove" , mouseMoveHandler);
    //             //When The Mouse Is Released Use This Function
    //             document.addEventListener("mouseup" , mouseUpHandler);

    //         }
    //         //When The Mouse Is Moving
    //         function mouseMoveHandler(event){
    //             // Subtracting The X-Coordinates Of Mouse When It Was Clicked From The Current X-Coordinates Of Mouse Gives Us The DIfference Or How Much The Width Is Increased Or Decreased 
    //             var difference = event.clientX - xCordinates;
    //             // The Current Width Will Be:
    //             var currentWidth = sidebarWidth + difference;
    //             //Coverting Vw into pixels;
    //             const widthInPixels = convertVwIntoPixels(currentWidth);
    //             if(convertVwIntoPixels(15) < widthInPixels && widthInPixels < convertVwIntoPixels(50)){
    //                 sidebar.style.width = `${widthInPixels} px`
    //             }
    //         }

    //         //When The Mouse Is Released
    //         function mouseUpHandler(){
    //             //Release All Events
    //             document.removeEventListener("mouseup" , mouseUpHandler);
    //             document.removeEventListener("mousemove" , mouseMoveHandler);
    //         }
    //         resizer.addEventListener("mousedown" , mouseDownHandler);
    //     }
    //     resizerFunction(resizer , sidebar);
    // })
    // useEffect(()=>{
    //     const sidebarLinks = document.querySelectorAll('a');
    //     document.addEventListener('click' , function(event){
    //        let clickedOnOptions = false;
    //        for (let i = 0; i < sidebarLinks.length; i++){
    //             if(event.target === sidebarLinks[i]){
    //                 clickedOnOptions = true;
    //                 break;
    //             }
    //        }
    //        if(clickedOnOptions === false){
    //         setActiveClass('')
    //        }
    //     })
    // } , [])
    // function handleActiveClass(identifier)
    // {
    //     setActiveClass(identifier);
    // }
    return(
        <div className="overviewContainer">
            {/* <div className="toc-container" ref={sidebarRef}>
                <ul className="tableOfContent">
                    <li><a className={activeClass === 'Introduction' ? 'active-class' : ''} onClick={() => handleActiveClass('Introduction')} href="#introduction">Introduction</a></li>
                    <li><a className={activeClass === 'Key Features' ? 'active-class' : ''} onClick={() => handleActiveClass('Key Features')} href="#key-features">Key Features</a></li>
                    <li><a className={activeClass === 'Benefits' ? 'active-class' : ''} onClick={() => handleActiveClass('Benefits')} href="#benefits">Benefits</a></li>
                    <li><a className={activeClass === 'User Guide' ? 'active-class' : ''} onClick={() => handleActiveClass('User Guide')} href="#user-guide">User Guide</a></li>
                    <li><a className={activeClass === 'Demo' ? 'active-class' : ''} onClick={() => handleActiveClass('Demo')} href="#demo">Demo</a></li>
                    <li><a className={activeClass === 'Special Thanks' ? 'active-class' : ''} onClick={() => handleActiveClass('Special Thanks')} href="#special-thanks">Special Thanks</a></li>
                </ul>
            </div> */}
            <TriadicLogo mode="linear"/>
            <div className="content">
                <div className="resizer"></div>
                <div className="sections">
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
            
        </div>
    )
}

export default Overview