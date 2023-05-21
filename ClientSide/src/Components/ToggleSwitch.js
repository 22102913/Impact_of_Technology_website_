import React, { useEffect } from 'react'

function OnClick(e) {
    if (e.checked) {

    }
}



export default function ToggleSwitch({offCommand, onCommand }) {

    
    const switchCSS = {
        position: "relative",
        display: "inline - block",
        width: "60px",
        height: "34px"
    };




    useEffect(() => {
        

    }, []);

    return (<label class="toggle-switch">
        <input type="checkbox" onClick={(e) => {
            if (e.target.checked) {
                onCommand();
            }
            else {
                offCommand();
            }
        }} />
        <span class="toggle-slider round"></span>
    </label>);
}


