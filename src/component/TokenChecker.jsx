// Function to verify token and remove if not valid
function VerifyToken() {
    // Retrieve token from localStorage
    const stoken = localStorage.getItem('token');

    if (stoken) {
        // Send token to server for verification
        fetch('https://triadicsqldb.onrender.com/checkt', {
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
                // Check if response is not true
                if (data === false) {
                    console.log("Inside the verify condition");
                    // Token is not valid, remove it from localStorage
                    localStorage.removeItem('token');
                }
            })
            .catch(error => {
                console.error('Error verifying token:', error);
            });
    }
}

export default VerifyToken;

