import  { useState, useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import customLanguage from "./CustomLan.js";
import "../design/Tlayout.css"
const Tlayout = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [outputMessage, setOutputMessage] = useState('');
    const editorRef = useRef(null);
    const [fontSize, setFontSize] = useState(14);
    const [theme, setTheme] = useState('hc-black');
    useEffect(() => {
        monaco.languages.register({ id: 'customLanguage' });
        monaco.languages.setMonarchTokensProvider('customLanguage', customLanguage);
    }, []);

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

        const selectedText = editor.getModel().getValueInRange(selection);
        return selectedText;
    };

    // Function to handle button click
    const handleButtonClick = (sendSelectedText) => {
        const textToSend = sendSelectedText ? getSelectedText() : inputMessage;
        fetchData(textToSend);
    };

    const fetchData = async (textToSend) => {
        try {
            const response = await fetch('http://localhost:8080/process_json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: textToSend }),
            });

            const data = await response.json();
            setOutputMessage(data.reversed_message);
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
        const filename = window.prompt('Enter filename:', 'editor-content.txt');
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
        };
        reader.readAsText(file);
    };
    return (
        <>
            <button onClick={() => handleButtonClick(true)}>Run</button>
            <button onClick={increaseFontSize}>Inc Font</button>
            <button onClick={decreaseFontSize}>Dec Font</button>
            <button className="dropdown-item" onClick={() => changeTheme('hc-black')}>HC-Black</button>
            <button className="dropdown-item" onClick={() => changeTheme('vs-dark')}>VS-Dark</button>
            <button className="dropdown-item" onClick={() => changeTheme('vs-light')}>VS-light</button>
            <button onClick={handleSave}>Save</button>
            <input type="file" onChange={handleLoad}  />
            <div className={"row"}>

                <div className={"column"}>
                    <MonacoEditor
                        width="100%"
                        height="77VH"
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
                    <h3>Result:</h3>
                    <h4>{outputMessage}</h4>
                </div>
            </div>
        </>
    );
};

export default Tlayout;
