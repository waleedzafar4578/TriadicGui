import '../design/Overview.css'
import TriadicLogo from './Logo';
import {useState, useEffect} from 'react';
import {interpolateColor, hexToRgb, rgbToHex} from '../utils.js';
import CompareIcon from '../assets/svgs/CompareIcon.jsx';
import AmbuiguityIcon from '../assets/svgs/Ambuiguity.jsx';
import {MemoryControl} from '../assets/svgs/MemoryControl.jsx';
import MlService from "../assets/svgs/MlService.jsx";
import StatusQuery from "../assets/svgs/StatusQuery.jsx";
import RustLang from "../assets/svgs/RustLang.jsx";

function Overview() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const calculateGradient = () => {
        const startColor = hexToRgb("#0F4C81");
        const midColorOne = hexToRgb('#00C6BB');
        const midColorTwo = hexToRgb('#1C857E');
        const endColor = hexToRgb("#334B49");

        // Determine the scroll factor between 0 and 1
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const factor = Math.min(scrollY / maxScroll, 1);

        // Interpolate the colors
        const color1 = rgbToHex(interpolateColor(startColor, midColorOne, factor));
        const color2 = rgbToHex(interpolateColor(midColorOne, midColorTwo, factor));
        const color3 = rgbToHex(interpolateColor(midColorTwo, endColor, factor));
        const color4 = rgbToHex(interpolateColor(endColor, startColor, factor));

        return `linear-gradient(to bottom right, ${color1}, ${color2}, ${color3}, ${color4})`;
    };
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
    // useEffect(() => {
    //     window.addEventListener('scroll' , ()=>{
    //         const scrollTop = window.scrollY;
    //         const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrollPercentage = scrollTop / docHeight;
    //         const startColor = [15 , 76 , 129];
    //         const endColor = [116 , 250 , 200];
    //         const currentColor = startColor.map((start , index) => {
    //             const end = endColor[index];
    //             return Math.round(start + (end - start) * scrollPercentage);
    //         });
    //         const gradientColor = `rgb(${currentColor.join(',')})`;
    //         document.getElementById('introduction').style.background(`linear-gradient(to bottom right , ${gradientColor}) 0%, ${gradientColor} 100%`);
    //     });
    // } , [])
    return (
        <div className="overviewContainer">
            <TriadicLogo mode="linear"/>
            <div className="content">
                <div className="sections">
                    <div id="introduction" style={{background: calculateGradient()}}>
                        <div className="glass">
                            <h2>Welcome to the Triadic SQL Engine</h2>
                            <p>
                                Triadic SQL Engine is a web-based SQL engine that addresses the challenges of
                                <strong> indeterminacy</strong>,<br></br> including ambiguity, vagueness, missing, and
                                incomplete
                                information in databases.It presents a <strong>Peircean alternative</strong> to
                                existing <strong>Boolean/Binary</strong> and fuzzy logic-based database systems.At the
                                heart of
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                this engine is <strong>Peirce's Triadic Logic</strong>, which forms the core of its
                                functionality.
                            </p>

                        </div>
                    </div>

                    <div className="nom_example">

                        <h2 id={"handing_1"}>SIGNIFICANT FEATURE PROSPECTIVE</h2>


                        <div className="key-features">
                            <CompareIcon/>
                            <AmbuiguityIcon/>
                            <MemoryControl/>
                            <MlService/>
                            <StatusQuery/>
                            <RustLang/>
                        </div>
                    </div>
                    <div className="nom_example1">
                        <h1>How Automated Is Normalization In Triadic Engine?</h1>

                    </div>
                    <div className="nom_example2">
                        <h3>Lets assume this data in physical registers.</h3>
                        <table>
                            <tbody>
                            <tr>
                                <th>Cnic</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#001</td>
                                <td>example#1</td>
                                <td>+92 123</td>
                                <td>14</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#002</td>
                                <td>example#2</td>
                                <td>+92 123</td>
                                <td>12</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#003</td>
                                <td>example#3</td>
                                <td>+92 123</td>
                                <td>18</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#004</td>
                                <td>example#4</td>
                                <td>+92 123</td>
                                <td>28</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#004</td>
                                <td>example#5</td>
                                <td>+92 123</td>
                                <td>48</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#005</td>
                                <td>example#6</td>
                                <td>+92 123</td>
                                <td>38</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#006</td>
                                <td>example#7</td>
                                <td>+92 123</td>
                                <td>48</td>
                            </tr>
                            </tbody>

                        </table>
                        <h5>In a Boolean database, if we need to insert data, we must first resolve any duplication. For example,
                            if we set a CNIC number as the primary key, we must resolve any duplication before
                            entering the data into the system. However, in Triadic Logic, we can insert data into the database and resolve any issues at any time.</h5>
                        <h4>Insert data into Triadic Table</h4>
                        <table>
                            <tbody>
                            <tr>
                                <th>Cnic pk(T)</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#001 :T</td>
                                <td>example#1 :T</td>
                                <td>+92 123 :T</td>
                                <td>14 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#002 :T</td>
                                <td>example#2 :T</td>
                                <td>+92 123 :T</td>
                                <td>12 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#003 :T</td>
                                <td>example#3 :T</td>
                                <td>+92 123 :T</td>
                                <td>18 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#004 :T</td>
                                <td>example#4 :T</td>
                                <td>+92 123 :T</td>
                                <td>28 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#004 :L</td>
                                <td>example#5 :T</td>
                                <td>+92 123 :T</td>
                                <td>48 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#005 :T</td>
                                <td>example#6 :T</td>
                                <td>+92 123 :T</td>
                                <td>38 :T</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>#006 :T</td>
                                <td>example#7 :T</td>
                                <td>+92 123 :T</td>
                                <td>38 :T</td>
                            </tr>
                            </tbody>
                        </table>
                        <h5>When find example#5 cnic then you can change,before this we able to see using cnic limit.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
