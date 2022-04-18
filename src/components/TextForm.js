// import { useState } from "react"
import React,{useState}from 'react'

export default function TextForm(props) {
    const touppercase=()=>{
        // console.log("to upper case" + text)
        let usertext=text.toUpperCase()
        setText(usertext)
        props.showAlert("Converted to Uppercase!","success")
    }
    const tolowercase=()=>{
        // console.log("to upper case" + text)
        let usertext=text.toLowerCase()
        setText(usertext)
        props.showAlert("Converted to Lowercase!","success")
    }
    const clear=()=>{
        // console.log("to upper case" + text)
        let usertext=('')
        setText(usertext)
        props.showAlert("Textarea has been cleared!","success")
    }
    const startSpaces=()=>{
        // console.log("to upper case" + text)
        let usertext = text.trimStart()
        setText(usertext)
    }
   
    const change=(event)=>{
        console.log('changed')
        setText(event.target.value)
    }
    const[text,setText]=useState("")
    return (
       
        <>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042473' }}>
            <h1>{props.Heading}</h1>
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#c9c0c0':'white',color: props.mode==='dark'?'white':'black' }}  onChange={change} id="TextForm" rows="7"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-2  my-3" onClick={touppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-warning my-3" onClick={tolowercase}>Convert to Lowerrcase</button>
            <button disabled={text.length===0 }  className="btn btn-danger mx-2 my-3 " onClick={clear}>Clear All</button>
            <button disabled={text.length===0}  className="btn btn-info mx-2 my-3" onClick={startSpaces}>Remove spaces at start</button>
           
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
             <h2>Your text summary</h2>
             <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
