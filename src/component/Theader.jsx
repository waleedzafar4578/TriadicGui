import "../design/Theader.css"
import {useEffect, useState} from "react";
function Theader(props){
    const [isConnected, setIsConnected] = useState(true); // Default to true

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await fetch('http://localhost:8080/health_check');

                if (response.ok) {
                    setIsConnected(true);
                } else {
                    setIsConnected(false);
                }
            } catch (error) {
                setIsConnected(false);
            }
        };

        // Check connection every 5 seconds (adjust as needed)
        const intervalId = setInterval(checkConnection, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array to run only once on mount

    return (
    <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
        {isConnected ? <header>{props.text}</header> : <header>{props.text}</header>}
    </div>
)
}
export default Theader