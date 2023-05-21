import React, {useState} from "react";

import ToggleSwitch from "../Components/ToggleSwitch";

const Account = ({signedIn }) => {

    const [loggedIn, setLog] = useState(false);
    const [LogIn, SetLogIn] = useState(false);
    const [errorNum, SetErrorNum] = useState(0);


    const erros = ["", "Invalid userName or Password", "Email has been taken", "UserName has been taken"];


    async function VerifyUser() {
        //WeatherForecast/VerifyUser?Password=123456&UserName=Shray

        const userName = await document.getElementById("userName-input").value;
        const password = await document.getElementById("password-input").value;

        const response = await fetch(`weatherforecast/VerifyUser?Password=${password}&UserName=${userName}`);
        const data = await response.json();
        console.log(data);
        setLog(data);
        if (!data) {
            SetErrorNum(1);
        }
    }

    async function PostUserToServer(firstName, lastName, email, userName, password) {
        const response = await fetch(`weatherforecast/AddUser?FirstName=${firstName}&LastName=${lastName}&Password=${password}&UserName=${userName}&Email=${email}`);
        const data = await response.json();

        console.log("data" +data);

        if (data["successful"]) {
            setLog(true);
            SetErrorNum(0);
        }
        else if (data["error"] == "invalid-email") {
            SetErrorNum(2);
        }
        else if (data["error"] == "invalid-userName") {
            SetErrorNum(3);
        }
    }

    function ConfirmSignIn() {
        const firstName = document.getElementById("firstName-input").value;
        const lastName = document.getElementById("lastName-input").value;
        const email = document.getElementById("email-input").value;
        const userName = document.getElementById("userName-input").value;
        const password = document.getElementById("password-input").value;

        PostUserToServer(firstName, lastName, email,userName, password);
    }




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
        <button onClick={VerifyUser}>Confirm</button>
    </div>


    return (
        <div>
            <div class="content-container" style={{ display: "grid",gridTemplateColumns : "60% 40%" } }>
                <div style={{ display: "grid", gridTemplateRows: " 15% 75%", height:"inherit" }} >
                    <h2 class="page-title" >
                        Account
                    </h2>
                    <div>
                        {!loggedIn ? <ToggleSwitch offCommand={() => { SetLogIn(false) }} onCommand={() => { SetLogIn(true) }} /> : <></>  }
                        <p class="p2" style={{height:"100%", minHeight:"fit-content"}}>
                            {loggedIn ? <h2>You are logged in</h2> : 
                                <div style={{width:"100%"} }>
                                    <h5 style={{ margin: "1em" }}>You are not currently logged in.</h5>
                                
                                    {LogIn ? logInForm : sigUpForm}
                                </div>}
                            <h4>{ erros[errorNum]}</h4>
                        </p>
                    </div>
                </div>
                <p class = "p1">
                    Sign in to join the diccusion about the ethical impact of technology.
                </p>
            </div>

            
        </div>
    );
};

export default Account;