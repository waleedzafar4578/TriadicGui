import "../design/Theader.css"
import {useEffect, useState} from "react";
import config from "./config.js";
function Theader(){
    const [isConnected, setIsConnected] = useState(true); // Default to true

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await fetch(config.health_check_api);

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
        {isConnected ? <header>Triadic Sql</header> : <header>Triadic Sql</header>}
    </div>
)
}
export default Theader