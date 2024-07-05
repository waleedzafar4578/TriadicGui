// Function to verify token and remove if not valid
import config from "./config.js";

function VerifyToken() {
    // Retrieve token from localStorage
    const stoken = localStorage.getItem('token');

    if (stoken) {
        // Send token to server for verification
        fetch(config.token_check_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token:stoken }),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server sending bool value:");
                console.log(data);
                // Check if the response is not true
                if (data === false) {
                    console.log("Inside the verify condition");
                    // Token is not valid, remove it from localStorage
                    localStorage.removeItem('token');
                    window.location.reload();
                    //window.location.href = 'https://waleedzafar4578.github.io/TriadicGui/';
                }
            })
            .catch(error => {
                console.error('Error verifying token:', error);
            });
    }
}

export default VerifyToken;

