import React, {useState, useEffect, useRef, Component} from 'react'
import "./Accordion.css"
import Chevron from './chevron.svg'
import download from './pp.jpg';

export default function Accordion() {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">



            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>Hey!! wanna say you something</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                <img src={download}></img>
                </p>
            </div>
            
        </div>
    )
}