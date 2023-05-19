import React from "react";

const Account = ({signedIn }) => {

    const signInForm = <p class="p2" style={{ display: "grid",gridTemplateColumns:"40% 50%"  }}>
        
        <h4>FirstName</h4>
        <input />
        <h4>LastName</h4>
        <input />
        <h4>Email</h4>
        <input />
        <h4>Password</h4>
        <input />
    </p>


    return (
        <div>
            <div class="content-container" style={{ display: "grid",gridTemplateColumns : "60% 40%" } }>
                <div style={{ display: "grid", gridTemplateRows: " 35% 65%", height:"inherit" }} >
                    <h2 class="page-title" >
                        Account
                    </h2>

                    {signedIn ? <h2>You are logged in</h2> : signInForm }
                    
                </div>
                <p>

                </p>
            </div>

            
        </div>
    );
};

export default Account;