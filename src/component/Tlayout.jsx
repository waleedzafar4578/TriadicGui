import {useEffect, useRef, useState} from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import customLanguage from "./CustomLan.js";
import "../design/Tlayout.css"
import OutputWindow from "./Output.jsx";
import data from '../assets/databases.json'
// import Dropdown from './Dropdown.jsx';


const Tlayout = () => {
    // const themeOptions = ['hc-black' , 'vs-light' , 'vs-dark']
    const [selectedDatabase , setSelectedDatabase] = useState('Databases')
    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    const [isDatabaseDropdownOpen , setIsDatabaseDropdownOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [InputStatus,setInputStatus]=useState('');
    const [outputMessage, setOutputMessage] = useState('');
    const editorRef = useRef(null);
    const [fontSize, setFontSize] = useState(14);
    const [theme, setTheme] = useState('hc-black');
    const dropdownRef = useRef(null);
    const themeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDatabaseDropdownOpen(false);
          }
          if(themeRef.current && !themeRef.current.contains(event.target)){
            setIsDropdownOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    useEffect(()=>{
        const menuItems = document.querySelectorAll("li");
        console.log(menuItems);
        document.addEventListener('click ', function(event){
            let clickOnMenuItems = false;
            for(let i = 0; i < menuItems.length; i++){
                if(event.target === menuItems[i]){
                    clickOnMenuItems = true;
                    break;
                }
            }
            if(clickOnMenuItems === false){
                setIsDropdownOpen(false);
                setIsDatabaseDropdownOpen(false);
            }
        })
    } , [])

    useEffect(() => {
        monaco.languages.register({ id: 'customLanguage' });
        monaco.languages.setMonarchTokensProvider('customLanguage', customLanguage);
    }, []);

    useEffect(() => {
        // Save content to local storage whenever it changes
        if (inputMessage){
            localStorage.setItem('editorContent', inputMessage);
        }

    }, [inputMessage]);

    useEffect(() => {
        // Load content from local storage if available
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            setInputMessage(savedContent);
        }
    }, []);
    //Handling Dropdown Opening and Closing
    function handleSelectDatabase(indentifier)
    {
        setSelectedDatabase(indentifier);
    }
    function handleDatabaseDropdown()
    {
        setIsDatabaseDropdownOpen(!isDatabaseDropdownOpen)
    }
    function handlingDropdownToggle()
    {
        setIsDropdownOpen(!isDropdownOpen);
    }

    // Function to handle editor content change
    const handleEditorChange = (newValue) => {
        setInputMessage(newValue);

    };

    // Function to get the selected text from the editor
    const getSelectedText = () => {
        const editor = editorRef.current;
        if (!editor) return '';

        const selection = editor.getSelection();
        if (!selection) return '';

        return editor.getModel().getValueInRange(selection);
    };


    // Function to handle button click
    const handleButtonClick = (sendSelectedText) => {
        const textToSend = sendSelectedText ? getSelectedText() : inputMessage;
        fetchData(textToSend);
    };

    const fetchData = async (textToSend) => {
        const stoken = localStorage.getItem('token');
        console.log(stoken);
        try {
            const response = await fetch('http://localhost:8080/pq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token:stoken, query: textToSend }),
            });

            const data = await response.json();
            console.log(data);
            setOutputMessage(data.query_information);
            setInputStatus(data.status);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to handle button click to increase font size
    const increaseFontSize = () => {
        setFontSize(fontSize + 1);
    };

    // Function to handle button click to decrease font size
    const decreaseFontSize = () => {
        if (fontSize > 1) {
            setFontSize(fontSize - 1);
        }
    }
    const changeTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };
    const handleSave = () => {
        // Prompt the user for a filename
        const filename = window.prompt('Enter filename:', 'Query.tri');
        if (!filename) return; // Exit if the user cancels the prompt

        // Create a Blob from the input message
        const blob = new Blob([inputMessage], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = filename; // Set the filename from the prompt
        document.body.appendChild(a);

        // Trigger the download
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    const handleLoad = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setInputMessage(reader.result);
            localStorage.setItem('editorContent', reader.result);
        };
        reader.readAsText(file);
    };
    const databases = Object.keys(data);
    return (
        <>
            <div id={"btt"}>
                <button onClick={() => handleButtonClick(true)}>Run</button>
                <button onClick={increaseFontSize}>Inc Font</button>
                <button onClick={decreaseFontSize}>Dec Font</button>
                {/* <button onClick={() => changeTheme('hc-black')}>HC-Black</button>
                <button onClick={() => changeTheme('vs-dark')}>VS-Dark</button>
                <button onClick={() => changeTheme('vs-light')}>VS-light</button> */}
                <button className='drop-down-button' onClick={handlingDropdownToggle}>Themes</button>
                {isDropdownOpen && (
                    <ul className='drop-down-menu' ref={themeRef}>
                        <li className = 'dropdown-item' onClick={() => changeTheme('hc-black')}>HC-Black</li>
                        <li className = 'dropdown-item' onClick={() => changeTheme('vs-dark')}>VS-Dark</li>
                        <li className = 'dropdown-item' onClick={() => changeTheme('vs-light')}>VS-Light</li>
                    </ul>
                )}
                {/* <Dropdown options={themeOptions} handleSelect={changeTheme} buttonName={'Theme'}/> */}
                <button onClick={handleSave}>Save</button>
                

                <button className='databases-drop-down-button' onClick={handleDatabaseDropdown}>{selectedDatabase}</button>
                {isDatabaseDropdownOpen && (
                    <ul className="database-menu" ref={dropdownRef}>
                        {databases.map(database => (
                            <li className='database-item' onClick={() => handleSelectDatabase(database)} key = {database}>{database}</li>
                        ))}
                    </ul>
                )}
                

                <input className='handleLoad' type="file" onChange={handleLoad}/>
            </div>
            <div className={"row"}>

                <div className={"column"}>
                    <MonacoEditor
                        width="100vw"
                        height="50vh"
                        language="customLanguage"
                        theme={theme}
                        value={inputMessage}
                        options={{wordWrap: 'on', wordWrapColumn: 80, fontSize: fontSize}}
                        onChange={handleEditorChange}
                        editorDidMount={(editor) => {
                            editorRef.current = editor;
                        }}
                        className="rounded-editor"
                    />
                </div>
                <div className={"column"}>
                   <OutputWindow status={InputStatus} output={outputMessage}/>
                </div>
            </div>
        </>
    );
};

export default Tlayout;
