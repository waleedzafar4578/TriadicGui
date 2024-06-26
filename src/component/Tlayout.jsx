import {useEffect, useRef, useState} from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import {Button} from '@mui/material';
import {Dialog} from '@mui/material';
import {DialogActions} from '@mui/material';
import {DialogContent} from '@mui/material';
import customLanguage from "./CustomLan.js";
import "../design/Tlayout.css"
import OutputWindow from "./Output.jsx";
import config from "./config.js";
import Drawer from './Drawer.jsx';
//import button from "bootstrap/js/src/button.js";
// import Dropdown from './Dropdown.jsx';


const Tlayout = () => {
    // const themeOptions = ['hc-black' , 'vs-light' , 'vs-dark']
    const [dialogOpen , setDialogOpen] = useState(false);
    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [InputStatus,setInputStatus]=useState('');
    const [outputMessage, setOutputMessage] = useState('');
    const editorRef = useRef(null);
    const [fontSize, setFontSize] = useState(14);
    const [theme, setTheme] = useState('hc-black');
    const fileInputRef = useRef();

    const [isDrawer , setIsDrawer] = useState(window.innerWidth < 825);
    const [drawerOpen , setDrawerOpen] = useState(false);
    
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
    console.log(isDrawer)
    useEffect(() => {
        // Load content from local storage if available
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            setInputMessage(savedContent);
        }
    }, []);
    useEffect(() => {
        function handleDrawer()
        {
            setIsDrawer(window.innerWidth < 825);
        }
        window.addEventListener('resize' , handleDrawer)
        return () => {
            window.removeEventListener('resize' , handleDrawer);
        }
    } , [])
    function toggleDrawer()
    {
        setDrawerOpen(!drawerOpen);
    }
    //Handling Dropdown Opening and Closing
    function handlingDropdownToggle()
    {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    // Function to handle editor content change
    const handleEditorChange = (newValue) => {
        setInputMessage(newValue);

    };
    function handleDialogOpen()
    {
        setDialogOpen(true);
    }
    function handleDialogClose()
    {
        setDialogOpen(false);
    }
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
            const response = await fetch(config.process_query_api, {
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
    function handleInputFileCLick()
    {
        fileInputRef.current.click();
    }
    const [database, setDatabase] = useState("None");
    useEffect(() => {
        const database_name = async () => {

            const token=localStorage.getItem('token');
            const response = await fetch(config.get_database_api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token}),
            });



            const data = await response.json();
            console.log(data);
            setDatabase(data);

        };
        // Check connection every 1 second (adjust as needed)
        const intervalId = setInterval(database_name, 1000);
        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array to run only once on mount
    const props = {increaseFontSize: increaseFontSize,
                   decreaseFontSize: decreaseFontSize,
                   handleSave: handleSave
                  }


    return (
        <>
            {!isDrawer ? 
                <div id={"btt"}>
                <button onClick={() => {
                    handleButtonClick(true);
                    handleDialogOpen();
                    }}>Run</button>
                <button onClick={increaseFontSize}>Inc Font</button>
                <button onClick={decreaseFontSize}>Dec Font</button>
                <div className="dropdown">
                    <button className='drop-down-button' onClick={handlingDropdownToggle}>Themes</button>
                    {isDropdownOpen && (
                        <ul className='drop-down-menu'>
                            <li className = 'dropdown-item' onClick={() => changeTheme('hc-black')}>HC-Black</li>
                            <li className = 'dropdown-item' onClick={() => changeTheme('vs-dark')}>VS-Dark</li>
                            <li className = 'dropdown-item' onClick={() => changeTheme('vs-light')}>VS-Light</li>
                        </ul>
                    )}
                </div>


                <button onClick={handleSave}>Save</button>
                <button onClick={handleInputFileCLick}>Select File</button>
                <text className= 'db_select'>Selected Database: {database} </text>
                <input className='handleLoad' type="file" onChange={handleLoad} ref={fileInputRef}/>
            </div>
            : 
            <div className='drawer-menu'>
                <button onClick={() => {
                    handleButtonClick(true);
                    handleDialogOpen();
                    }}>Run</button>
                <text className= 'db_select'>Selected Database: {database} </text>
                {!drawerOpen ? <button onClick={toggleDrawer}>Open</button> :
                <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} {...props}/>}
            </div>
            }

            <div >


                    <MonacoEditor
                        width="100%"
                        height="89vh"
                        language="customLanguage"
                        theme={theme}
                        value={inputMessage}

                        options={{
                            wordWrap: 'on',
                            wordWrapColumn: 80,
                            fontSize: fontSize,
                        }}
                        onChange={handleEditorChange}
                        editorDidMount={(editor) => {
                            editorRef.current = editor;
                        }}
                        className="rounded-editor"
                    />


                <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="lg" fullWidth>
                    <DialogContent style={{
                        backgroundColor: theme === 'hc-black' || theme === 'vs-dark' ? '#403E3E' : 'white',
                        color: theme === 'hc-black' || theme === 'vs-dark' ? 'white' : 'black'
                    }}>
                        <OutputWindow status={InputStatus} output={outputMessage} />
                    </DialogContent>
                    <DialogActions style={{
                        backgroundColor: theme === 'hc-black' || theme === 'vs-dark' ? '#403E3E' : 'white',
                        color: theme === 'hc-black' || theme === 'vs-dark' ? 'white' : 'black'
                    }}>
                        <Button onClick={handleDialogClose}>Close</Button>
                    </DialogActions>
                </Dialog>

            </div>
        </>
    );
};

export default Tlayout;
