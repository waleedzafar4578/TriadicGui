import './App.css'
// import Theader from "./component/Theader.jsx";
// import Tfooter from "./component/Tfooter.jsx";
import AppRouter from "./component/Tnavi.jsx";
import Connection from "./component/Connection.jsx";
import {useEffect, useState} from "react";
// import VerifyToken from "./component/TokenChecker.jsx";
import Overview from './component/Overview.jsx';
import EditorPage from './component/EditorPage.jsx';




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


  return (
    //   <>
    //       {isLoggedIn ? (
    //           <AppRouter onLogout={handleLogout} />
    //       ) : (
    //           <Connection onLogin={handleLogin} toggleRender = {isCreatingAccount} toggleFunction = {handleCreatingAccount}/>
    //       )}
    //   </>
    // <Overview />
    <EditorPage/>
  )
}

export default App
