import React from "react"
import reactlogo from "../reactlogo.png"
export default function Navbar()
{
    return(
        <nav>
            <img className = "nav--icon" src = {reactlogo} alt = "reactlogo"/>
            <h3 className = "nav--logo_text">ReactFacts</h3>
            <h4 className = "nav--title">ReactCourse-Project1</h4>
        </nav>
    )
}