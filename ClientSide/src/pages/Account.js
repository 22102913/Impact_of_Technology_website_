import React, {useState} from "react";

import ToggleSwitch from "../Components/ToggleSwitch";

async function PostUserToServer(firstName, lastName, email,userName, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "FirstName": firstName , "LastName": lastName , "Email": email ,"UserName" : userName, "Password": password})
    };



    const response = await fetch('weatherforecast/PostUser', requestOptions);
}

function ConfirmSignIn() {
    const firstName = document.getElementById("firstName-input").value;
    const lastName = document.getElementById("lastName-input").value;
    const email = document.getElementById("email-input").value;
    const userName = document.getElementById("userName-input").value;
    const password = document.getElementById("password-input").value;

    PostUserToServer(firstName, lastName, email,userName, password);
}

const Account = ({signedIn }) => {

    const [loggedIn, setLog] = useState(false);
    const [LogIn, SetLogIn] = useState(false);


    const sigUpForm = <div style={{ display: "grid", gridTemplateColumns: "40% 50%", width: "100%", height: "100%", alignItems: "center" }}>
        <h3>Sign Up</h3>
        <div></div>
        <h4>FirstName</h4>
        <input id="firstName-input"/>
        <h4>LastName</h4>
        <input id="lastName-input"/>
        <h4>Email</h4>
        <input id="email-input" />
        <h4>UserName</h4>
        <input id="userName-input" />
        <h4>Password</h4>
        <input id="password-input"/>
        <button onClick={ConfirmSignIn}>Confirm</button>
    </div>

    const logInForm = <div style={{ display: "grid", gridTemplateColumns: "40% 50%", width: "100%", height: "100%", alignItems: "center" }}>
        <h3>Log in</h3>
        <div></div>
        <h4>UserName</h4>
        <input id="userName-input" />
        <h4>Password</h4>
        <input id="password-input" />
        <button onClick={ConfirmSignIn}>Confirm</button>
    </div>


    return (
        <div>
            <div class="content-container" style={{ display: "grid",gridTemplateColumns : "60% 40%" } }>
                <div style={{ display: "grid", gridTemplateRows: " 15% 75%", height:"inherit" }} >
                    <h2 class="page-title" >
                        Account
                    </h2>
                    <p class="p2" style={{height:"100%"} }>
                        {loggedIn ? <h2>You are logged in</h2> : 
                            <div style={{width:"100%"} }>
                                <h5 style={{ margin: "0" }}>You are not currently logged in.</h5>
                                <ToggleSwitch offCommand={() => { SetLogIn(true) }} onCommand={() => { SetLogIn(false) }} />
                                {LogIn ? logInForm : sigUpForm}
                            </div>}
                    </p>
                </div>
                <p class = "p1">
                    Sign in to join the diccusion about the ethical impact of technology.
                </p>
            </div>

            
        </div>
    );
};

export default Account;