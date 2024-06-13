import { useState, useEffect } from 'react';

function HelpPage() {
    const [helpData, setHelpData] = useState(null);

    useEffect(() => {
        fetch('https://triadicsqldb.onrender.com/help')
            .then(response => response.json())
            .then(data => {
                setHelpData(data);
            })
            .catch(error => {
                console.error('Error fetching help data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Help Page jawad</h1>
            {helpData && <p>{helpData.message}</p>}
        </div>
    );
}

export default HelpPage;