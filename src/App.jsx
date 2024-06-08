import './App.css'
 import Theader from "./component/Theader.jsx";
// import Tfooter from "./component/Tfooter.jsx";
import AppRouter from "./component/Tnavi.jsx";
import Connection from "./component/Connection.jsx";
import {useEffect, useState} from "react";
// import VerifyToken from "./component/TokenChecker.jsx";
import Overview from './component/Overview.jsx';
import EditorPage from './component/EditorPage.jsx';



//sadasd
function App() {
    const [isCreatingAccount , setIsCreatingAccount] = useState(false);
    function handleCreatingAccount()
    {
        setIsCreatingAccount(!isCreatingAccount)
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
    }, []);
    useEffect(() => {
        // Check if user is already logged in (e.g., token exists in localStorage)
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }, []);
    useEffect(() => {
        const checktoken = async () => {

                const token=localStorage.getItem('token');
                const response = await fetch('http://localhost:8080/checkt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({token}),
                });
                console.log(response);
                if (!response.ok) {
                    throw new Error('Something wrong when check token');
                }
                const data = await response.json();


                if (!data.find_token){
                    localStorage.removeItem('token');
                    console.log('Token removed from local storage because server discontinue with this token.');
                    window.location.reload();
                }


        };

        // Check connection every 5 seconds (adjust as needed)
        const intervalId = setInterval(checktoken, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array to run only once on mount


    const handleLogin = (token) => {
        // Store token in localStorage
        console.log("Login Function token:")
        console.log(token);
        localStorage.setItem('token', token);

        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Remove token from localStorage
        console.log("Logout function");
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };
//asd
  return (
       <>
           {isLoggedIn ? (
               <>
                   <Theader />
                   <AppRouter onLogout={handleLogout} />
               </>

           ) : (
               <Connection onLogin={handleLogin} toggleRender = {isCreatingAccount} toggleFunction = {handleCreatingAccount}/>
           )}
       </>
    // <Overview />
    //<EditorPage/>
  )
}

export default App
