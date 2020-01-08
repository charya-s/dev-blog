// MODULES
import React from "react";
import { isMobile } from "react-device-detect";
import { AiOutlineCopyright } from "react-icons/ai";

export const License = (props) => {
    return(
        <div id="license-container">
            <span style={{ color: isMobile ? "lightcyan" : (props.color==="white" ? "white" : "black") }}><AiOutlineCopyright /> 2019 Charya S.</span>
            <span></span>
        </div>
    );
}