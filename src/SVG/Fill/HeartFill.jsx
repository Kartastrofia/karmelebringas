import React from "react";

const HeartFill = ({width= "64", height="64", color='#1e1e1e', className=""}) => {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <title>heart</title> 
                <path d="M16.042 8.345c0 0-2-4.262-6.5-4.262-4.917 0-7.5 4.167-7.5 8.333 0 6.917 14 15.5 14 15.5s13.916-8.5 13.916-15.5c0-4.25-2.666-8.333-7.416-8.333s-6.5 4.262-6.5 4.262z"></path>
            </g>
        </svg>
       
    );
}
export default HeartFill;