import {useState} from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";


const Guest = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(true)
    return (
        <div>
            {isSignIn ? <SignIn/> : <SignUp/>}
            <button onClick={() => setIsSignIn(prevState =>!prevState)}> Switch to {isSignIn ? 'Sign up' : 'Sign In'}</button>
        </div>
    );
};

export default Guest;