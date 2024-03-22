import "../design/Connection.css";
import { useState } from "react";
import "../component/Tlayout.jsx";
function Connection() {
    const [InputName, setInputName] = useState('');
    const [outputMessage, setOutputMessage] = useState('');
    const [InputStatus,setInputStatus]=useState('');

    const adduser = async () => {
        try {
            const response = await fetch('http://localhost:8080/process_json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { message: "ADDUSER "+InputName } ),
            });

            const data = await response.json();
            setOutputMessage(data.reversed_message);
            setInputStatus(data.status);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const checkuser = async () => {
        try {
            const response = await fetch('http://localhost:8080/process_json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { message: "CHECKUSER "+InputName } ),
            });

            const data = await response.json();
            setOutputMessage(data.reversed_message);
            setInputStatus(data.status);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAdd = async () => {

        try {
            await adduser();
            alert("User added successfully! Output data: " + JSON.stringify(outputMessage));
        } catch (error) {
            alert("Failed to add user!");
        }
    };

    const handleCheck = async () => {

        try {
            await checkuser();
            alert("User connected successfully! Output data: " + JSON.stringify(outputMessage));
        } catch (error) {
            alert("Failed to connect user!");
        }
    };

    const handleInputChange = (event) => {
        setInputName(event.target.value);
    };

    return (
        <div className={"mwindow"}>
            <div className={"Connect"}>
                <div className="image-container">
                    <img src="image/slack.jpg" alt="Image Description" className="centered-img" />
                </div>
                <div className={"dwn"}>
                    <div id={"inputBar"}>
                        <input type={"text"} id={"name"} value={InputName} placeholder={"Name"} onChange={handleInputChange} />
                    </div>
                    <div id={"btnBar"}>
                        <button id={"nbtn"} onClick={handleAdd}>New</button>
                        <button id={"cbtn"} onClick={handleCheck}>Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connection;
